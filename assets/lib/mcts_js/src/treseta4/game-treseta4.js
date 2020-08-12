'use strict'
const util = require('util'); //for debugging only
const State = require('./state-treseta4.js');
const Play = require('./play-treseta4.js');


/** Class representing the game. */
class Game_treseta4 {
  
  /** Return the current player's legal plays from given state. */
  legalPlays(state) {

    const getSuite = (card) => card-card%100;
    const isSuite = (card, suite) => (card>=suite && card<=suite+99);

    let numberOfPlayers=4;

    if (state.board.type==='kifameno3') {
      numberOfPlayers=3;
    }
    
    let legalPlays = [];
        
    let playerCards=state.board.playerCards[state.player];
    
    let allCards=[...playerCards.cards, ...playerCards.optionalCards];

    if (state.board.table.length===0) {
      legalPlays=allCards.map(card => new Play(card));
      return legalPlays;
    }
    
    // vec je odigrana karta, moramo odgovarati
    let suite=getSuite(state.board.table[0]);

    //Ako sigurno ima suite, onda ga mora igrati
    if (playerCards.cards.some( card => isSuite(card, suite))) {
      allCards=allCards.filter( card => isSuite(card, suite));
      legalPlays=allCards.map( card => new Play(card));
      return legalPlays;
    }

    // igraj bilo sto
    if (state.player===state.board.playerId) {
      legalPlays=allCards.map(card => new Play(card));
      return legalPlays;
    }

    //ako bi igrac sa neodgovaranjem ostao sa manje mogucih karata od karata koje ima, tada mora odgovarati
    //primjer: igrac ima 4 karte; moguce da ima 3 kupe i 3 spade. Ne moze ne odgovarati
    //na spade (odn. igrati kupe), jer bi nakon tog poteza ostao sa samo moguce dvije kupe
    
    let mustFollow=false;
    
    /*allCards - .cards provjeravamo gore,*/ 
    if (playerCards.optionalCards.some(card => isSuite(card, suite))) {
      let remainingCards=allCards.filter( card => !isSuite(card, suite));

      if (remainingCards.length<state.board.playerCards[state.player].cardsCount) {
        mustFollow=true;
      }
      
      let otherPlayers;
      let p1AllCards;
      let p2AllCards;
      
      if (numberOfPlayers===3){
        if (!mustFollow) {
          otherPlayers=[0,1,2];
          otherPlayers.splice(state.player, 1);
          let index=otherPlayers.indexOf(state.board.playerId);
          otherPlayers.splice(index, 1);
          
          let p1AllCards=[...state.board.playerCards[otherPlayers[0]].cards, ...state.board.playerCards[otherPlayers[0]].optionalCards];

          let p01AllCards=[... new Set([...remainingCards, ...p1AllCards])];
          if (p01AllCards.length<state.board.playerCards[otherPlayers[0]].cardsCount+playerCards.cardsCount) {
            mustFollow=true;
          }
        }

      } else {

        if (!mustFollow) {
          // variables are named as if the state.player===0
          otherPlayers=[0,1,2,3]; 
          otherPlayers.splice(state.player, 1);
          let index=otherPlayers.indexOf(state.board.playerId);
          otherPlayers.splice(index, 1);

          p1AllCards=[...state.board.playerCards[otherPlayers[0]].cards, ...state.board.playerCards[otherPlayers[0]].optionalCards];
          p2AllCards=[...state.board.playerCards[otherPlayers[1]].cards, ...state.board.playerCards[otherPlayers[1]].optionalCards];
        }

        let p01AllCards;
        let p02AllCards;

        //check for any two players
        if (!mustFollow) {
          p01AllCards=[... new Set([...remainingCards, ...p1AllCards])];
          if (p01AllCards.length<state.board.playerCards[otherPlayers[0]].cardsCount+playerCards.cardsCount) {
            mustFollow=true;
          }
        }
        
        if (!mustFollow) {
          p02AllCards=[... new Set([...remainingCards, ...p2AllCards])];
          if (p02AllCards.length<state.board.playerCards[otherPlayers[1]].cardsCount+playerCards.cardsCount) {
            mustFollow=true;
          }
        }


        //check for any three players
        let p012AllCards;
        
        if (!mustFollow) {
          p012AllCards=[... new Set([...p01AllCards, ...p2AllCards])];
          if (p012AllCards.length<
                  state.board.playerCards[otherPlayers[0]].cardsCount
                  +state.board.playerCards[otherPlayers[1]].cardsCount
                  +playerCards.cardsCount) {
            mustFollow=true;
          }
        }
      }
    }

    if (mustFollow) {
      allCards=allCards.filter(card => isSuite(card, suite));
    }

    legalPlays=allCards.map(card => new Play(card));
    return legalPlays;

    //TODO:
    //moguce je da igrac neodgovaranje, ostavi sebi vise mogucih karata od broja karata u ruci;
    //ali da dijeli s drugin igracem iste karte.
    //Desilo se u testiranju: igrac 2 nije odgovarao, i kao rezultat za preostale dvije karte su mu bile moguce 
    // tri karte (npr. 211, 212, 313). Istovremeno, igrac jedan je imao moguce iste te karte (211,212,213).
    // Oba igraa su imala 3 karte za potrebne 2+2 karte

    //ili cemo pronaci nacin da otkrijemo ove slucajeve, ili pronaci nacin da MCTS otrkrije dead-end i odbaci tu kombinaciju
    /*
    test:
      -Bilo koja dva igraca izmedu sebe moraju imati dovoljno razlicitih karata
      -Bilo koja tri igraca izmedu sebe moraju imati dovoljno razlicitih karata
      -sva 4 igraca moraju imate izmedu ....
    */
  }

  
  isStrongerCard(card1, card2) {
    let suite=card2-card2%100;

    //if not the same suite, return false
    if (!(card1>=suite && card1<=suite+99)) {
      return false;
    }

    let c1=card1%100;
    let c2=card2%100;

    if (c1<=3) c1+=c1*10+10;
    if (c2<=3) c2+=c2*10+10;

    return c1>c2;

  }

  strongestCard(cards) {
  
    let ret=0;
    //let suite=cards[0]-cards[0]%100;
  
    cards.forEach((card, index)=> {
      if (this.isStrongerCard(card, cards[ret])){
          ret=index;
      }
    });
  
    return ret;
  }

  countBelle(cards) {
    let ret=0;
    cards.forEach(card=> {
      let c=card%100;
      if (c===1) ret+=3;
      if (c===2 || c===3 || c===11 || c===12 || c===13) ret++;
    });
    return ret;
  }

  hasRemainingCards(board) {
    for (let p of board.playerCards) {
      //if (p.optionalCards.length>0 || p.cards.length>0) return true;
      if (p.cardsCount>0) return true;
    }
    return false;
  }

  boardCopyOld(board) {
    return JSON.parse(JSON.stringify(board));
  }
  
  boardCopy(board) {
    return {
      matchId: board.matchId,
      type: board.type,
      playerId: board.playerId,
      table: [...board.table],
      playerCards: board.playerCards.map((e) => new Object({
        cards: [...e.cards],
        optionalCards: [...e.optionalCards],
        cardsCount: e.cardsCount
      })),
      teams: board.teams.map((e) => new Object({
        collectedCards: [...e.collectedCards],
        belle: e.belle
      })),
      player: board.player
    };
  }


  /** Advance the given state and return it. */
  nextState(state, play) {
    let newPlayer;

    let newHistory = state.playHistory.slice(); // 1-deep copy
    newHistory.push(play);


    //let newBoard = JSON.parse(JSON.stringify(state.board));
    let newBoard = this.boardCopy(state.board);
    newBoard.playerCards[newBoard.player].cardsCount--;
    
    //1. dodaj kartu na stol
    newBoard.table.push(play.card);

    let numberOfPlayers=4;

    if (state.board.type==='kifameno3') {
      numberOfPlayers=3;
    }

    // Optimizacija - posebno tretirati kad state.player===state.board.playerID
    // we need to run the code below on the first state objects, since it comes unsanitized from other lambda
    if (state.player===state.board.playerId && state.playHistory.length>0) {
      newBoard.playerCards[state.player].cards=newBoard.playerCards[state.player].cards.filter(card => card!==play.card);      
    } else {
      
      //2. makni odigranu kartu od svih igraca
      newBoard.playerCards.forEach((player, playerIndex) => {
          newBoard.playerCards[playerIndex].cards=newBoard.playerCards[playerIndex].cards.filter(card => card!==play.card);
          newBoard.playerCards[playerIndex].optionalCards=newBoard.playerCards[playerIndex].optionalCards.filter(card => card!==play.card);
      });

      //3. Ako igrac nije odgovarao, maknu mu sve karte istog suite-a
      let suite=newBoard.table[0]-newBoard.table[0]%100;
      const isNotSuite = (card) => !(card>=suite && card<=suite+99);

      if (isNotSuite(play.card)) {
        //ako ga ima u cards, morao je odgovarati
        newBoard.playerCards[newBoard.player].cards=newBoard.playerCards[newBoard.player].cards.filter(isNotSuite);
        newBoard.playerCards[newBoard.player].optionalCards=newBoard.playerCards[newBoard.player].optionalCards.filter(isNotSuite);
      }

      //4. ako je broj mogucih karata i opcionalnih karata jednak broju preostalih - sve su obvezne
      newBoard.playerCards.forEach((player, playerIndex) => {
        if (playerIndex!==state.board.playerId) {
          if (player.cards.length+player.optionalCards.length===player.cardsCount) {
            
            let newCards=[...player.optionalCards];

            newBoard.playerCards[playerIndex].cards.push(...newCards);
            newBoard.playerCards[playerIndex].optionalCards=[];

            newBoard.playerCards.forEach((player2, playerIndex2) => {
              if (playerIndex2!==playerIndex && playerIndex2!==state.board.playerId) {
                newBoard.playerCards[playerIndex2].optionalCards=newBoard.playerCards[playerIndex2].optionalCards.filter(card => !newCards.some(n => n===card));
              }
            });
          }
        }
      });
      
      

      let playerArray=[...new Array(numberOfPlayers).keys()];

      //5. Ako je karta opcionalna i samo kod jednog igraca, tada postaje obavezna za tog igraca
      newBoard.playerCards.forEach((player, playerIndex) => {
        if (playerIndex!==state.board.playerId) {
          let otherPlayerCards=[];

          //for (let p=0;p<=3;p++) {
          // laugh all you want, but it seams faster this way.
          // Plus VSCode will report profiler stats on forEach, but not on for loop
          playerArray.forEach( p => {
            if (p!=playerIndex && p!=state.board.playerId) {
              otherPlayerCards=[...otherPlayerCards, ...newBoard.playerCards[p].cards, ...newBoard.playerCards[p].optionalCards];
            }
          });

          let newCards=[...player.optionalCards.filter(optionalCard => !otherPlayerCards.some(card=>card===optionalCard))];

          newBoard.playerCards[playerIndex].cards.push(...newCards);
          //Ako je broj preostalih karata jednak broju karata, opcionalne karte nestaju
          if (newBoard.playerCards[playerIndex].cards.length===newBoard.playerCards[playerIndex].cardsCount) {
            newBoard.playerCards[playerIndex].optionalCards=[];
          } else {
            newBoard.playerCards[playerIndex].optionalCards=newBoard.playerCards[playerIndex].optionalCards.filter(optionalCard => otherPlayerCards.some(card=>card===optionalCard));
          }
        }
      });
    }

    //6. skupi karte sa stola ako je kraj ruke
    if (newBoard.table.length===numberOfPlayers) {
      let winner=this.strongestCard(newBoard.table);
      
      //winner=winner-3+newBoard.player;
      winner=winner-(numberOfPlayers-1)+newBoard.player;
      
      if (winner>=numberOfPlayers) winner-=numberOfPlayers;
      if (winner<0) winner+=numberOfPlayers;

      let winningTeam;
      
      if (numberOfPlayers===4) {
        winningTeam = winner===0||winner===2?0:1;
      } else {
        winningTeam=winner;
      }

      /*optimize after fixing the bug*/
      newBoard.teams[winningTeam].belle+=this.countBelle(newBoard.table);
      newBoard.teams[winningTeam].collectedCards.push(...newBoard.table);
      newBoard.table=[];
      
      if (!this.hasRemainingCards(newBoard)) {
        newBoard.teams[winningTeam].belle+=3;
      }

      //7. odredi ko igra sljedeci
      newBoard.player=winner;
      newPlayer=newBoard.player;

    } else {
      //7. odredi ko igra sljedeci
      newBoard.player++;
      if (newBoard.player>=numberOfPlayers) newBoard.player=0;
      newPlayer=newBoard.player;
    }

    return new State(newHistory, newBoard, newPlayer);
  }

  /** Return the winner of the game. */
  winner(state) {
    if (this.hasRemainingCards(state.board)) {
      return null;
    } else {
      
      if (state.board.type==="kifameno3") {

        let minBelle=Infinity;
        let lWinner;
        for (let i=0;i<3;i++) {
          if (state.board.teams[i].belle<minBelle) {
            lWinner=i;
            minBelle=state.board.teams[i].belle;
          } 
        }

        return {
          team0: state.board.teams[0].belle,
          team1: state.board.teams[1].belle,
          team2: state.board.teams[2].belle,
          winner: lWinner
        };

      } else {
        let lWinner;

        // switch (Math.sign(state.board.teams[0].belle-state.board.teams[1].belle)) {
        //   case -1: lWinner=1; break;
        //   case 0: lWinner=-1; break;
        //   case 1: lWinner=0; break;
        // }

        lWinner=[1,-1,0][Math.sign(state.board.teams[0].belle-state.board.teams[1].belle)+1];

        return {
          team0: state.board.teams[0].belle,
          team1: state.board.teams[1].belle,
          winner: lWinner
        };
      }
    }
  }
}

module.exports = Game_treseta4;
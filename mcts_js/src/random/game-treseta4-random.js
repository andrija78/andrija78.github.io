'use strict'

import Play from './play-treseta4-random.js';



/** Class representing the game. */
class Game_treseta4_random {

  
  /** Return the current player's legal plays from given state. */
  legalPlays(state) {

    let legalPlays = [];
    let playerCards=state.playerCards[state.player];
    let allCards=playerCards.cards
                  .concat(playerCards.optionalCards);
    
    if (state.table.length!==0) {
      let suite=state.table[0]-state.table[0]%100;
      const isSuite = (card) => (card>=suite && card<=suite+99);

      if (playerCards.cards.some(isSuite)) {
        allCards=allCards.filter(isSuite);
      }
    
    }

    legalPlays=allCards.map(card => new Play(card));
    return legalPlays;

  }

}

export default Game_treseta4_random;
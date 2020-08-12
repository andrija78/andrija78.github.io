const util = require('util'); //for debugging only

const DEFAULT_MCTS_TIMEOUT=process.env.DEFAULT_MCTS_TIMEOUT || 5;

const isLambda = !!(process.env.LAMBDA_TASK_ROOT || false);
var appSync;

if (isLambda) {
    appSync=require('../common/appSync');
}


const Game = require('./game-treseta4');
const State = require('./state-treseta4');
const Play = require('./play-treseta4');
const convertToCard=require('../common/convert');

const MonteCarlo1 = require('../common/monte-carlo');
const MonteCarlo2 = require('../common/monte-carlo-2');
const MonteCarlo3 = require('../common/monte-carlo-3');
const MonteCarloK3 = require('../common/monte-carlo-k3');

async function solver(event, context) {
    
    let game = new Game();
    let mcts;
    if (event.state.type==="kifameno3") {
        mcts= new MonteCarloK3(game);
    } else {
        switch(event.algorithm) {
            case "mcts":
                // deprecated name mcts. Should be mcts-{version/level}
                mcts= new MonteCarlo2(game);
                break;
            
            case "mcts-1":
                mcts= new MonteCarlo1(game);
                break;
                
            case "mcts-2":
                mcts= new MonteCarlo2(game);
                break;
            case "mcts-3":
                mcts= new MonteCarlo3(game);
                break;
        }
    }
    
    let state=new State([], event.state, event.state.player);
    let winner = game.winner(state);
    
    let counter=0;
    let play;

    
    if (winner === null && !isLambda) {
        let legalPlays=game.legalPlays(state);
        if (legalPlays.length===1) {
            play=legalPlays[0];
            console.log(event.algorithm, ' - Plays 0 - single play!');
            return convertToCard(play);
            
        }
    }

    if (winner === null) {
        //let legalPlays=game.legalPlays(state);
        
        let playerCards=state.board.playerCards[state.player];
        let allCards=playerCards.cards
                        .concat(playerCards.optionalCards);

        if (allCards.length===1) {
            play=new Play(allCards[0]);
        } else {
            let ret=mcts.runSearch(state, (event.mcts_timeout || DEFAULT_MCTS_TIMEOUT));
            
            //play = mcts.bestPlay(state, "robust");
            play = mcts.bestPlay(state, "max");
            
            if (!isLambda) {
                let stats = mcts.getStats(state);
                console.log(event.algorithm, '-:', state.player,' Plays ', stats.n_plays);
            }
        }
    }
        
    let ret=-1;        
    if (play!==undefined && play!==null) {
        ret=convertToCard(play);
        //console.log("ret", ret);
        if (appSync!==undefined) {
            let appSyncRes=await appSync.runMutation(event.state.matchId, event.state.playerId, ret);
        }
    }
    
    return ret;
};

module.exports = solver;
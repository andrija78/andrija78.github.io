const util = require('util'); //for debugging only
const TRESETA4_RANDOM_GAME=require('./game-treseta4-random');
const ALG_RANDOM=require('./random');
const Play_C4 = require('./play-treseta4-random');

const convertToCard=require('../common/convert');

const isLambda = !!(process.env.LAMBDA_TASK_ROOT || false);
var appSync;

if (isLambda) {
    appSync=require('../common/appSync');
}

async function solver(event, context) {
    //console.log(util.inspect(event, false, null, false /* enable colors */));
    let state = event.state;
    let game=new TRESETA4_RANDOM_GAME();
    let alg_random=new ALG_RANDOM(game);

    let bestPlay=alg_random.bestPlay(state);
    //console.log("bestPlay", bestPlay);
    let ret=convertToCard(bestPlay);
    //console.log("ret", ret);

    if (appSync!==undefined) {
        let appSyncRes=await appSync.runMutation(state.matchId, state.playerId, ret);
        //console.log(appSyncRes);
    }
    
    return ret;
};

module.exports = solver;
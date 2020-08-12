import util from 'util'; //for debugging only
import TRESETA4_RANDOM_GAME from './game-treseta4-random';
import ALG_RANDOM from './random';
import Play_C4 from './play-treseta4-random';

import convertToCard from '../common/convert';

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

export default solver;
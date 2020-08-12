const util = require('util'); //for debugging only
//expecting
// event={
//  state: state,
//  algorithm: 'random'
//}
const isLambda = !!(process.env.LAMBDA_TASK_ROOT || false);

var appSync;
if (isLambda) {
    appSync=require('./common/appSync');
}

var exec;
if (!isLambda) {
    exec = util.promisify(require('child_process').exec);
}

const randomSolver=require('./random/index');
const treseta4Solver=require('./treseta4/index');

const convertToCard=require('./common/convert');

async function dartSolver(event) {
    let call='dart C:/Users/arubelj/Documents/development/treseta/treseta-backend/amplify/backend/function/mcts/src/dart/lib/main.dart';
    let p=JSON.stringify(event.state);
    const regex = /\"/gi;
    call=call + ' "' + p.replace(regex,'\\\"') + '"';

    const { stdout, stderr } = await exec(call);
    //console.log('stdout:', stdout);
    //console.error('stderr:', stderr);

    
    let ret=JSON.parse(stdout)
    //console.log(ret);

    console.log('dart: Plays ', ret.stats);
    return convertToCard({card:ret.play});
}

async function dartSolverNative(event) {
    let call='C:/Users/arubelj/Documents/development/treseta/treseta-backend/amplify/backend/function/mcts/src/dart/mcts_native.exe';
    let p=JSON.stringify(event.state);
    const regex = /\"/gi;
    call=call + ' "' + p.replace(regex,'\\\"') + '"';

    const { stdout, stderr } = await exec(call);
    //console.log('stdout:', stdout);
    //console.error('stderr:', stderr);

    
    let ret=JSON.parse(stdout)
    //console.log(ret);

    console.log('dart: Plays ', ret.stats);
    return convertToCard({card:ret.play});
}


exports.handler = async function (event, context) {
    //console.log(util.inspect(event, false, null, false));

    //event.algorithm='random';
    
    
    switch(event.algorithm) {
        case "test":
            // cloud smoke test
            let appSyncRes;
            if (isLambda) {
                appSyncRes=await appSync.runMutation(event.state.matchId, event.state.playerId, event.ret);
            } else {
                appSyncRes={message: "only works in lambda environment"};
            }
            return appSyncRes;
        
        case "random":
            return randomSolver(event);
        
        case "mcts":
            // deprecated name mcts. Should be mcts-{version/level}
            return treseta4Solver(event);
        
        case "mcts-1":
            return treseta4Solver(event);
            
        case "mcts-2":
            return treseta4Solver(event);
        
        case "mcts-3":
            return treseta4Solver(event);
        
        case "dart": 
            return dartSolver(event);
        case "dart-native": 
            return dartSolverNative(event);
    }
    
};
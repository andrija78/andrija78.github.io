const util = require('util'); //for debugging only
//expecting
// event={
//  state: state,
//  algorithm: 'random'
//}


const randomSolver=require('./random/index');
const treseta4Solver=require('./treseta4/index');

const convertToCard=require('./common/convert');

exports.handler = async function (event, context) {
    
    switch(event.algorithm) {
        
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
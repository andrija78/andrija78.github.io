import util from 'util'; //for debugging only
//expecting
// event={
//  state: state,
//  algorithm: 'random'
//}


import randomSolver from './random/index';
import treseta4Solver from './treseta4/index';

import convertToCard from './common/convert';

export async function handler (event, context) {
    
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
    
}
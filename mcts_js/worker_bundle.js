//import mcts from './index'; //for debugging only

onmessage = function(event) {

  //console.log('Hello from the worker.');
  let message=mcts(event);
  postMessage(message);

}
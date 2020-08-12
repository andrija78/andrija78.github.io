import mcts from './src/index'; //for debugging only

onmessage = function(event) {

  let message=mcts(event);
  postMessage(message);

}
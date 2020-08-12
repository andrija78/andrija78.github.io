'use strict'

/** Class representing a game state. */
class State_C4 {

  constructor(playHistory, board, player) {
    this.playHistory = playHistory;
    this.board = board;
    this.player = player;

    this._hash=playHistory.map(e=>e.card).join('-');
  }
  
  isPlayer(winningTeam) {
    return (winningTeam=== 0 && (this.player===0 || this.player===2)) 
        || (winningTeam=== 1 && (this.player===1 || this.player===3));
  }

  isPlayerK3(winningTeam) {
    return this.player===winningTeam;
  }

  hash() {
    return this._hash;
  }

  // Note: If hash uses board, multiple parents possible
}

module.exports = State_C4;
'use strict'

/** Class representing a state transition. */
class Play_C4 {
  constructor(card) {
    this.card = card;
  }

  hash() {
    return this.card.toString();
  }
}

module.exports = Play_C4;
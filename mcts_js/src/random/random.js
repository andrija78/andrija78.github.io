class AlgRandom {

    constructor(game) {
        this.game = game;
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    bestPlay(state) {
        let legalPlays=this.game.legalPlays(state);
        let bestPlay=legalPlays[this.getRandomInt(legalPlays.length)];
        return bestPlay;
      }
}

module.exports = AlgRandom
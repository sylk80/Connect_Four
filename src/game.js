const Player = require("./player.js")
const Rack = require("./rack.js")
class Game {

    start() {
        return null
    }

    players() {
        return new Player()
    }

    rack() {
        return new Rack()
    }

}

module.exports = Game
const Player = require("./player.js")
const Rack = require("./rack.js")

const startMessage = "Connect Four game starts"
class Game {


    start() {
        return startMessage + this.rack().display()
    }

    players() {
        return new Player()
    }

    rack() {
        return new Rack()
    }

}

module.exports = Game
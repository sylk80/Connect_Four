const Player = require("./player.js")
const Rack = require("./rack.js")

const startMessage = "Connect Four game starts"
const creationMessage = "Empty rack is created."
class Game {


    start() {
        return startMessage + this.rack().display() + creationMessage
    }

    players() {
        return new Player()
    }

    rack() {
        return new Rack()
    }

}

module.exports = Game
const Player = require("./player.js")
const Rack = require("./rack.js")

const startMessage = "Connect Four game starts"
const creationMessage = "Empty rack is created."
const lineSeparator = "\n"
class Game {


    start() {
        return lineSeparator +
            startMessage +
            lineSeparator + lineSeparator +
            this.rack().display() +
            lineSeparator + lineSeparator +
            creationMessage
    }

    currentPlayer() {
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
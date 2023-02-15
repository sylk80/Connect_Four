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
        return this.players()[0]
    }

    nextPlayer() {
        return this.players()[1]
    }

    players() {
        let yellowPlayer = new Player("YELLOW")
        let redPlayer = new Player("RED")
        return [yellowPlayer,redPlayer]
    }

    rack() {
        return new Rack()
    }

}

module.exports = Game
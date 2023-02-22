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

    nextMove() {
        const player = this.currentPlayer();
        const move = player.nextColumn()
        const rack = this.rack();
        rack.placeToken(player.color[0], move)
        let output = player.color + " has placed a token"
        output += lineSeparator
        output += rack.display()
        output += "It is " + this.nextPlayer().color+  "'s turn"
        return output
    }

}

module.exports = Game
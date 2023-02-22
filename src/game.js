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
        let rack = this.rack();
        rack = this.getPlayerMoveOnRack(player, rack)
        let output = this.getPlacingMessage(player)
        output += rack.display()
        output += this.getEndTurnMessage()
        return output
    }

    getPlayerMoveOnRack(player, rack) {
        const move = player.nextColumn()
        rack.placeToken(player.getToken(), move)
        return rack
    }

    getPlacingMessage(player) {
        let message = lineSeparator
        message += player.color + " has placed a token."
        message += lineSeparator
        return message
    }

    getEndTurnMessage() {
        let message = lineSeparator
        message += "It is " + this.nextPlayer().color+  "'s turn."
        return message
    }

}

module.exports = Game
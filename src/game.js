const Player = require("./player.js")
const Rack = require("./rack.js")

const startMessage = "Connect Four game starts"
const creationMessage = "Empty rack is created."
const lineSeparator = "\n"
const PLAYER_NUMBER = 2;
class Game {

    constructor() {
        this.round=0
        this.rackOfGame=new Rack()
    }

    start() {
        return lineSeparator +
            startMessage +
            lineSeparator + lineSeparator +
            this.rack().display() +
            lineSeparator + lineSeparator +
            creationMessage
    }

    currentPlayer() {
        return this.players()[this.round % PLAYER_NUMBER]
    }

    nextPlayer() {
        const nextPlayerIndex = this.round % PLAYER_NUMBER === 1 ? 0 : 1
        return this.players()[nextPlayerIndex]
    }

    players() {
        let yellowPlayer = new Player("YELLOW")
        let redPlayer = new Player("RED")
        return [yellowPlayer,redPlayer]
    }

    rack() {
        return this.rackOfGame
    }

    nextMove() {
        const player = this.currentPlayer();
        let rack = this.rack();
        rack = this.getPlayerMoveOnRack(player, rack)
        this.rackOfGame = rack
        let output = this.getPlacingMessage(player)
        output += rack.display()
        output += this.getEndTurnMessage()
        this.round++
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
/* eslint-disable new-cap */
const {
    Given,
    When,
    Then,
    Fusion,
} = require("jest-cucumber-fusion")

const Game = require('../../src/game')
const Player = require("../../src/player");

let game
let currentPlayer
let nextPlayer
let output

beforeEach(() => {
    const playerMOveSpy = jest.spyOn(Player.prototype, "nextColumn")
    playerMOveSpy.mockReturnValue(4)
})

Given('the game has started', () => {
    game = new Game()
    currentPlayer = game.currentPlayer()
    nextPlayer = game.nextPlayer()
    output = game.nextMove()
})

When('the second player makes a move', () => {
    output = game.nextMove()
})

Then('it should be visible on the rack along with the first', () => {
    expect(output).toContain("\n" +
        nextPlayer.color + " has placed a token.\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | |R| | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | |Y| | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "It is " + currentPlayer.color + "'s turn.")
})

Fusion("second_move.feature")




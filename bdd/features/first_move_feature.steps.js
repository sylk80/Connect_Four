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
})

When('the first player makes a move', () => {
    output = game.nextMove()
})

Then('it should be visible on the board', () => {
    expect(output).toContain("\n" +
        currentPlayer.color + " has placed a token.\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | |Y| | | |\n" +
        "+-+-+-+-+-+-+-+\n" +
        "It is " + nextPlayer.color + "'s turn.")
})

Fusion("first_move.feature")




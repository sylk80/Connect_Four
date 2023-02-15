/* eslint-disable new-cap */
const {
    Given,
    When,
    Then,
    Fusion,
} = require("jest-cucumber-fusion")

const Game = require('../../src/game')

let game
let currentPlayer
let nextPlayer
let output

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
        currentPlayer + " has placed a token\n" +
        "\n" +
        "| | | | | | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | | | | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "| | | |Y| | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "\n" +
        "It is " + nextPlayer + "'s turn.")
})

Fusion("first_move.feature")




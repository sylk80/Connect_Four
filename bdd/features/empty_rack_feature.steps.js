/* eslint-disable new-cap */
const {
    Given,
    When,
    Then,
    Fusion,
} = require("jest-cucumber-fusion")

const { Game } = require('../../src/template')

let game
let output

Given('the players are present', () => {
    game = new Game()
})

When('the game starts', () => {
    output = game.start()
})

Then('an empty rack is displays', () => {
    expect(output).toContain("\n" +
        "Connect Four game starts\n" +
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
        "| | | | | | | | \n" +
        "+-+-+-+-+-+-+-+\n" +
        "\n" +
        "Empty rack is created.")
})

Fusion("empty_rack.feature")




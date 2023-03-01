const Game = require('../src/game.js');
const Player = require('../src/player.js');
const { EMPTY_RACK, FIRST_MOVE, SECOND_MOVE } = require("./mock/mockObjects")



describe('Game should be created...', () => {
    const game = new Game();
    const output = game.start()
    test('should be a Game class...', () => {
      expect(game).toBeDefined();
    });
    test('should be able to start...', () => {
        expect(output).toBeDefined();
    });
    test('players should be there...', () => {
        const players = game.players()
        expect(players).toBeDefined();
    });
    test('rack should be there...', () => {
        const rack = game.rack()
        expect(rack).toBeDefined();
    });
    test('rack should be displayed...', () => {
        expect(output).toContain(EMPTY_RACK);
    });
    test('start message should be displayed...', () => {
        expect(output).toContain("Connect Four game starts");
    });
    test('creation message should be displayed...', () => {
        expect(output).toContain("Empty rack is created.");
    });
  });

describe('First move can be made, when...', () => {
    const game = new Game();
    let output = game.start()
    const currentPlayer = game.currentPlayer()
    const nextPlayer = game.nextPlayer()
    const playerMOveSpy = jest.spyOn(Player.prototype, "nextColumn")
    playerMOveSpy.mockReturnValue(4)
    output = game.nextMove()
    test('current player can be selected...', () => {
        expect(currentPlayer).toBeDefined();
    });
    test('next player can be selected...', () => {
        expect(nextPlayer).toBeDefined();
    });
    test('current and next player should be different...', () => {
        expect(nextPlayer).not.toEqual(currentPlayer);
    });
    test('current player should make a move..', () => {
        expect(output).toContain(FIRST_MOVE)
    });
    test('player turn message should be displayed...', () => {
        expect(output).toContain(currentPlayer.color + " has placed a token")
    });
    test('next turn message should be displayed...', () => {
        expect(output).toContain("It is " + nextPlayer.color + "'s turn");
    });
});

describe('First move can be made, when...', () => {
    const game = new Game();
    let output = game.start();
    const currentPlayerFirst = game.currentPlayer()
    const nextPlayerFirst = game.nextPlayer()
    const playerMOveSpy = jest.spyOn(Player.prototype, "nextColumn")
    playerMOveSpy.mockReturnValue(4)
    output = game.nextMove()
    const tokenListFirst = game.rack().tokenList[0]
    const currentPlayerSecond = game.currentPlayer()
    const nextPlayerSecond = game.nextPlayer()
    const output2 = game.nextMove()
    const tokenListSecond = game.rack().tokenList;
    const currentPlayerThird = game.currentPlayer()
    const nextPlayerThird = game.nextPlayer()
    test('player should be changed with the turn...', () => {
        expect(currentPlayerSecond).toEqual(nextPlayerFirst)
        expect(nextPlayerSecond).toEqual(currentPlayerFirst)
    });
    test('rack should preserve previous moves...', () => {
        expect(tokenListSecond).toContain(tokenListFirst)
    });
    test('token should be displayed along with the previous one...', () => {
        expect(output).toContain(currentPlayerFirst.getToken())
        expect(output2).toContain(currentPlayerFirst.getToken())
        expect(output2).toContain(currentPlayerSecond.getToken())
    });
    test('token should be displayed along with the previous one on the rack...', () => {
        expect(output2).toContain(SECOND_MOVE)
    });
    test('game should rotate players...', () => {
        expect(currentPlayerThird).toEqual(currentPlayerFirst)
        expect(nextPlayerThird).toEqual(nextPlayerFirst)
    });

});
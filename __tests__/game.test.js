const Game = require('../src/game.js');
const { EMPTY_RACK } = require("./mock/mockObjects")

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
  });
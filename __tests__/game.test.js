const Game = require('../src/game.js');

describe('Game should be created...', () => {
    const game = new Game();
    test('should be a Game class...', () => {
      expect(game).toBeDefined();
    });
    test('should be able to start...', () => {
        const output = game.start()
        expect(output).toBeDefined();
    });
    test('players should be there...', () => {
        const players = game.players()
        expect(players).toBeDefined();
    });
  });
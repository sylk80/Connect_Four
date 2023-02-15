const { Game} = require('../src/game.js');

describe('Game should be created...', () => {
    test('should be a Game class...', () => {
      const game = new Game();
      expect(game).toBeDefined();
    });
  });
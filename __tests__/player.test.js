const Player = require('../src/player.js');

describe('Player should be created...', () => {
    const player = new Player();
    test('should be a Player class...', () => {
        expect(player).toBeDefined();
    });
});
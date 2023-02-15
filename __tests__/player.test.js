const Player = require('../src/player.js');

describe('Player should be created...', () => {
    const player = new Player();
    test('should be a Player class...', () => {
        expect(player).toBeDefined();
    });
});
describe('Player should be able to move...', () => {
    const player = new Player("YELLOW");
    test('should be a Player class...', () => {
        const column = player.nextColumn()
        expect(column).toBeDefined();
    });
});
const Player = require('../src/player.js');
const {COLUMNS} = require("./mock/mockObjects");

describe('Player should be created...', () => {
    const player = new Player();
    test('should be a Player class...', () => {
        expect(player).toBeDefined();
    });
});
describe('Player should be able to move...', () => {
    const player = new Player("YELLOW");
    const column = player.nextColumn()
    test('should pick a column...', () => {
        expect(column).toBeDefined();
    });
    test('should pick a valid column...', () => {
        expect(COLUMNS).toContain(column)
    });
    const columnManual = player.nextColumn(4)
    test('can pick a valid column...', () => {
        expect(COLUMNS).toContain(columnManual)
        expect(columnManual).toBe(4)
    });
});
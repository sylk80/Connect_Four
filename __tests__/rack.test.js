const Rack = require('../src/rack.js');
const {EMPTY_RACK} = require("./mock/mockObjects");

describe('Rack should be created...', () => {
    const rack = new Rack();
    test('should be a Rack class...', () => {
        expect(rack).toBeDefined();
    });
    test('should be a displayed...', () => {
        const output = rack.display()
        expect(output).toBeDefined();
    });
    test('empty rack displayed...', () => {
        const output = rack.display()
        expect(output).toContain(EMPTY_RACK);
    });
});

describe('Rack should register the move...', () => {
    const rack = new Rack();
    test('should be able to register moved...', () => {
        const newMove = rack.placeToken()
        expect(newMove).toBeDefined();
    });
    test('should require color...', () => {
        const newMove = rack.placeToken(1, 1)
        expect(newMove).toBe("Valid color - Y / R - required as first parameter");
    });
    test('should require column...', () => {
        const newMove = rack.placeToken("Y", 100)
        expect(newMove).toBe("Valid column - 1-7 - required as second parameter");
    });
    test('should register the tokens placement...', () => {
        const newMove = rack.placeToken("Y", 1)
        expect(newMove).toBe("YELLOW has placed a token");
    });
    test('should register the tokens placement for both colors...', () => {
        const newMove = rack.placeToken("R", 2)
        expect(newMove).toBe("RED has placed a token");
    });
    test('tokens should be in a column...', () => {
        const rack2 = new Rack();
        rack2.placeToken("Y", 1)
        const yellowTokens = rack.getTokenList("Y")
        expect(yellowTokens).not.toBeNull();
    });
    test('tokens should be in a column, a value should be returned..', () => {
        const rack2 = new Rack();
        rack2.placeToken("Y", 1)
        const yellowTokens = rack2.getTokenList("Y")
        expect(yellowTokens).toHaveLength(1)
    });
    test('tokens should be in a column, value returned should contain the column..', () => {
        const rack2 = new Rack();
        rack2.placeToken("Y", 1)
        const yellowTokens = rack2.getTokenList("Y")
        expect(yellowTokens[0].column).toBe(1)
    });
    test('tokens should occupy the lowest available space within the column..', () => {
        const rack2 = new Rack();
        rack2.placeToken("Y", 1)
        const yellowTokens = rack2.getTokenList("Y")
        expect(yellowTokens[0].row).toBe(0)
    });
    test('tokens should always occupy the lowest available space within the column..', () => {
        const rack2 = new Rack();
        rack2.placeToken("Y", 1)
        rack2.placeToken("Y", 1)
        const yellowTokens = rack2.getTokenList("Y")
        expect(yellowTokens[0].row).toBe(0)
        expect(yellowTokens[1].row).toBe(1)
    });
});
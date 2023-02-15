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
});
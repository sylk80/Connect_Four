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
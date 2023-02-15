const Rack = require('../src/rack.js');

describe('Rack should be created...', () => {
    const rack = new Rack();
    test('should be a Player class...', () => {
        expect(rack).toBeDefined();
    });
});
const {EMPTY_RACK} = require("../__tests__/mock/mockObjects");

class Rack {

    display () {
        return EMPTY_RACK
    }

    placeToken() {
        return null
    }

}

module.exports = Rack
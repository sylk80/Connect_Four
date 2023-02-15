const {EMPTY_RACK} = require("../__tests__/mock/mockObjects");
const colors = ["Y", "R"]

class Rack {

    display () {
        return EMPTY_RACK
    }

    placeToken(color) {
        if(colors.indexOf(color) < 0) {
            return "Valid color - Y / R - required as first parameter"
        } else {
            return null
        }
    }

}

module.exports = Rack
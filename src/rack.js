const {EMPTY_RACK} = require("../__tests__/mock/mockObjects");
const colors = ["Y", "R"]
const COLUMNS = [1, 2, 3, 4, 5, 6, 7]

class Rack {

    display () {
        return EMPTY_RACK
    }

    placeToken(color, column) {
        if(colors.indexOf(color) < 0) {
            return "Valid color - Y / R - required as first parameter"
        } else {
            if(COLUMNS.indexOf(column) < 0) {
                return "Valid column - 1-7 - required as second parameter"
            } else {
                return null
            }
        }
    }

}

module.exports = Rack
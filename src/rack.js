const COLORS = ["Y", "R"]
const COLUMNS = [1, 2, 3, 4, 5, 6, 7];
const ROWDIVIDER = "+-+-+-+-+-+-+-+"
const COLDIVIDER = "|"
const ROWS = 6
const EMPTY = " "
const NEWLINE = "\n"

class Rack {

    constructor() {
        this.tokenList = []
    }

    display () {
        return this.buildRack()
    }

    buildRack () {
        let rack = ""
        for (let rows=1; rows <= ROWS; rows++) {
            for(let cols=1; cols<= COLUMNS.length+1; cols++) {
                rack += COLDIVIDER
                if(cols < COLUMNS.length+1) {
                    rack += EMPTY
                } else {
                    rack += NEWLINE
                }
            }
            rack += ROWDIVIDER
            if(rows < ROWS) {
                rack += NEWLINE
            }
        }
        return rack;
    }

    placeToken(color, column) {
        if(COLORS.indexOf(color) < 0) {
            return "Valid color - Y / R - required as first parameter"
        } else {
            if(COLUMNS.indexOf(column) < 0) {
                return "Valid column - 1-7 - required as second parameter"
            } else {
                    this.addTokenToRack(color,column)
                    return this.placementMessage(color)
            }
        }
    }

    addTokenToRack(color, column) {
        this.tokenList.push({color: color, column: column, row: this.getLowestInColumn(column)})
    }

    getLowestInColumn(column) {
        let existingTokens = this.tokenList.filter(element => element.column === column)
        return existingTokens.length + 1
    }

    placementMessage(color) {
        if(color === 'Y') {
            return "YELLOW has placed a token"
        } else {
            return "RED has placed a token"
        }
    }

    getTokenList(color) {
        return this.tokenList.filter(element => element.color === color)
    }

}

module.exports = Rack
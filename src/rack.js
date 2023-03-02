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
        this.stateList = []
    }

    display () {
        return this.buildRack()
    }

    buildRack () {
        let rack = ""
        for (let rows=ROWS; rows >= 1; rows--) {
            rack = this.addRow(rack, rows)
            rack = this.addRowDivider(rows, rack)
        }
        return rack;
    }

    addRow(rack, rows) {
        let tokenInRow = this.tokenList.filter(element => element.row === rows)
        for(let columns=1; columns<= COLUMNS.length+1; columns++) {
            rack = this.addColumn(columns,rack,tokenInRow)
        }
        return rack;
    }

    addColumn(columns, rack, tokenInRow) {
        rack += COLDIVIDER
        if(columns < COLUMNS.length+1) {
            let token = tokenInRow.filter(element => element.column === columns)
            rack += token.length > 0 ?  token[0].color : EMPTY
        } else {
            rack += NEWLINE
        }
        return rack
    }

  addRowDivider(rows, rack) {
      rack += ROWDIVIDER
      if(rows > 1) {
          rack += NEWLINE
      }
      return rack
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
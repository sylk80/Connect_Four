const COLUMNS = 6
class Player {

    constructor(color) {
        this.color = color
    }

    nextColumn(column) {
        if(column > 0 && column <= COLUMNS+1) {
            return column
        } else {
            return Math.floor(Math.random() * COLUMNS)+1
        }
    }
}

module.exports = Player
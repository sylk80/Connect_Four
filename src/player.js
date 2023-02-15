const COLUMNS = 6
class Player {

    constructor(color) {
        this.color = color
    }

    nextColumn( ) {
        return Math.floor(Math.random() * COLUMNS)+1
    }
}

module.exports = Player
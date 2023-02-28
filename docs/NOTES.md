...indicators...

:heavy_check_mark: / :green_circle:  - green test

:x: / :red_circle: - failing test

:dart: - goal

:heavy_plus_sign: - items

:hammer_and_pick: - refactor

:warning: - Techdebt

### Description

Connect Four kata : https://en.wikipedia.org/wiki/Connect_Four

Connect four is a two-player connection rack game, in which the players choose a color and then take turns dropping colored tokens 
into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available 
space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line
of four of one's own tokens

### Domain

:heavy_plus_sign: Rack is the playing field

:heavy_plus_sign: Rack has 7 columns and 6 rows

:heavy_plus_sign: Tokens are put into the rack

:heavy_plus_sign: Two players can play the game

:heavy_plus_sign: Red player and yellow player

:heavy_plus_sign: Tokens can occupy the lowest available space within the column

:heavy_plus_sign: Four token formations win the game

:heavy_plus_sign: Horizontal, Vertical or Diagonal win is allowed

:heavy_plus_sign: First we implement a bot-to-bot game

### Scenario 1

:radio_button: As a staring user

:arrow_right: I want an empty rack displayed

:arrow_left:  So that I can make my first move

### User acceptance test 1

:heavy_plus_sign: Given the players are present 

:construction: When the game starts

:heavy_exclamation_mark: Then an empty rack is displays

```

Connect Four game starts

| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+

Empty rack is created.
```

### Unit tests 1

:dart: Game should be created :heavy_check_mark:

:dart: Players should be initialized :heavy_check_mark:

:dart: Rack should be initialized :heavy_check_mark:

:dart: Rack should be displayed :heavy_check_mark:

:dart: Start message should be displayed :heavy_check_mark:

:dart: Creation message should be displayed :heavy_check_mark:

### Scenario 2

:radio_button: As a staring user

:arrow_right: I want to place a token

:arrow_left:  So that I can see it appear in the rack


### User acceptance test 2

:heavy_plus_sign: Given the game has started

:construction: When the first player makes a move

:heavy_exclamation_mark: Then it should be visible on the rack

```

YELLOW has placed a token

| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | |Y| | | | 
+-+-+-+-+-+-+-+

It is RED's turn.
```

### Unit tests 2

:dart: Player should be selected :heavy_check_mark:

:dart: Player should pick a column :heavy_check_mark:

:dart: Rack should register the token :heavy_check_mark:

:dart: Token should be in a valid column :heavy_check_mark:

:dart: Token should occupy the lowest available space within the column :heavy_check_mark:

:dart: Token should be displayed in the column :heavy_check_mark:

:dart: Game should register the move :heavy_check_mark:


### Scenario 3

:radio_button: As the second user to turn

:arrow_right: I want to place a token

:arrow_left:  So that I can see it appear in the rack next to the first token

### User acceptance test 3

:heavy_plus_sign: Given the game has started

:construction: When the second player makes a move

:heavy_exclamation_mark: Then it should be visible on the rack along with the first token

```

RED has placed a token

| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | | | | | | 
+-+-+-+-+-+-+-+
| | | |R| | | | 
+-+-+-+-+-+-+-+
| | | |Y| | | | 
+-+-+-+-+-+-+-+

It is YELLOW's turn.
```

### Unit tests 3

:dart: Player should be changed with the turn :heavy_check_mark:

:dart: Rack should preserve previous moves

:dart: Token should be displayed along with the previous one

:dart: Game should rotate players and preserve rack state

:dart: Token should be placed in the lowest row available
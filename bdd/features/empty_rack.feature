Feature: Game should start with an empty rack
Connect Four game startes with an empty rack

Scenario: Empty rack creation
Given the players are present
When the game starts
Then an empty rack is displays
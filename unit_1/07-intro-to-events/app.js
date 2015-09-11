
var app = angular.module('eventsIntro', []);

app.controller('EventsExercises', function($scope) {

  // random number picker
  $scope.number = 5;
  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };

  // word reverser
  $scope.word = "";
  $scope.reverseWord = function() {
    var reversed = "";
    for (var i = $scope.word.length - 1; i >=0 ; i--) {
      reversed += $scope.word[i];
    }
    $scope.word = reversed;
  };

  // ping pong score keeper
  $scope.player1 = new Player(true, 'Player 1', 'p1');
  $scope.player2 = new Player(false, 'Player 2', 'p2');
  $scope.points = $scope.player1.score + $scope.player2.score;
  $scope.resetGame = resetGame;
  $scope.toggleEdit = toggleEdit;
});

function Player(firstServe, name, id) {
  // firstServe is a bool determine whether the player has the first serve
  this.name = name;
  this.id = id;
  this.score = 0;
  this.gamesWon = 0;
  this.serving = firstServe;
  this.edit = false;
}

Player.prototype.scored = function (opponent) {
  // don't let scores go higher than 11
  if (this.score === 11 || opponent.score === 11)
    return;

  this.score += 1;
  if (this.score < 11)
    this.hasServe(opponent);
  else {
    endGame(this, opponent);
  }
};

Player.prototype.wonGame = function () {
  this.gamesWon += 1;
};

Player.prototype.hasServe = function (opponent) {
  var total = this.score + opponent.score;
  var totalEven = total % 2 === 0;

  if (totalEven && total > 1) {
    var tmp = this.serving;
    this.serving = opponent.serving;
    opponent.serving = tmp;
  }
};

//utility

// handle end of a game
function endGame(p1, p2) {
  if (p1.score === 11)
    p1.wonGame();
  else
    p2.wonGame();

  p1.serving = false;
  p2.serving = false;
}

// reset for a new game, keep gamesWon count
function resetGame(p1, p2) {
  p1.score = 0;
  p2.score = 0;
  p1.serving = true;
}

// toggle name editing fields for players
function toggleEdit(player) {
  player.edit = !player.edit;
}

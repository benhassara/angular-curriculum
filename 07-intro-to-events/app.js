
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
  $scope.player1 = new Player(true, 'p1');
  $scope.player2 = new Player(false, 'p2');
  $scope.points = $scope.player1.score + $scope.player2.score;
});

function Player(firstServe, name) {
  // firstServe is a bool determine whether the player has the first serve
  this.name = name;
  this.score = 0;
  this.gamesWon = 0;
  this.serving = firstServe;
}

Player.prototype.scored = function (opponent) {
  this.score += 1;
  this.hasServe(opponent);
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

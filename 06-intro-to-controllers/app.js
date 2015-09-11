// create a new module called firstApp, and assign it to var app
var app = angular.module('firstApp', []);

// create a new controller in the  module attached to app, firstApp
// first argument is the name of the controller
// second argument is a function that defines the functionality of the controller
app.controller("MyFirstController", function($scope) {
  $scope.name = "Severus Snape";
  $scope.FavColor = "blue";
  $scope.secondsInACentury = function() {
    var years = 100,
        days = 365,
        hours = 24,
        minutes = 60,
        seconds = 60;

    return seconds * minutes * hours * days * years;
  };
  $scope.rightNow = Date.now();
});

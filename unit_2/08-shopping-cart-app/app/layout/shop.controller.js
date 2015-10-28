(function() {
  'use strict';

  angular.module('app.layout')
    .controller('shopCtrl', shopCtrl);

  shopCtrl.$inject = ['$scope', 'teaData'];

  function shopCtrl($scope, teaData) {
    $scope.teas = teaData.getTeaData();
  }
})();

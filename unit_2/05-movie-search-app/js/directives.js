angular.module('movieSearchApp')

  .directive('navBar', navBar);

function navBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/navBar.html',
    controller: SearchCtrl
  };
}

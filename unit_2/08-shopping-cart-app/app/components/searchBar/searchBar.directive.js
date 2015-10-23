(function() {
  'use strict';

  angular.module('app.components.searchBar')
    .directive('searchBar', searchBarDirective);

  function searchBarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/searchBar/searchBar.html'
    };
  }
})();

(function() {
  'use strict';

  angular.module('app.layout.pageFooter')
    .directive('pageFooter', pageFooterDirective);

  function pageFooterDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/layout/pageFooter/pageFooter.html'
    };
  }
})();

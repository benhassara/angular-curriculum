(function() {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.core',
    'app.layout',
    'app.components'
  ])
    .config(routeConfiguration);

  routeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfiguration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .when('/', '/shop')
    .otherwise('/shop');

    $stateProvider
    .state('shop', {
      url: '/shop',
      templateUrl: 'app/layout/shop.html'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: 'app/layout/cart/index.html'
    });
  }
}());

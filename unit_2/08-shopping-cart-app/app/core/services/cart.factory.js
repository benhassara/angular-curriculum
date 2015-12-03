(function() {
    'use strict';

    angular.module('app.core.services')
    .factory('cart', cartFactory);

    function cartFactory() {
        var factory = {};
        var items = [];

        factory.addToCart = function(item) {
            items.push(item);
        };

        factory.getCart = function() {
            return items;
        };

        factory.getNumItems = function() {
            return items.length;
        };

        factory.getCartTotal = function() {
            return items.reduce(function(prev, curr) {
                return prev + curr.product.price;
            }, 0);
        };

        return factory;
    }
})();

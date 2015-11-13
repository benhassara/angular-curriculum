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

        return factory;
    }
})();

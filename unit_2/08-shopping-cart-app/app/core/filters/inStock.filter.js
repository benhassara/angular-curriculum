(function() {
    'use strict';

    angular.module('app.core.filters')

        .filter('inStock', inStock);

    function inStock() {
        return function(input) {
            var output = '';

            if (input) {output = 'Yes';}
            else {output = 'No';}

            return output;
        };
    }
})();

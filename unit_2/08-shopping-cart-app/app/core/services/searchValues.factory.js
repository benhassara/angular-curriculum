(function() {
    'use strict';

    angular.module('app.core.services')
    .factory('searchValues', searchValuesFactory);

    function searchValuesFactory() {
        var factory = {};
        var category = '';
        var name = '';

        factory.category = function(newCategory) {
            return arguments.length ? (category = newCategory) : category;
        };

        factory.name = function(newName) {
            return arguments.length ? (name = newName) : name;
        };

        return factory;
    }
})();

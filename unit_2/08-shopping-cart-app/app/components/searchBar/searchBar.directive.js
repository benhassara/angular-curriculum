(function() {
    'use strict';

    angular.module('app.components.searchBar')
    .directive('searchBar', searchBarDirective);

    function searchBarDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/searchBar/searchBar.html',
            controller: SearchBarCtrl,
            controllerAs: 'vm',
            bindToController: true,
        };
    }

    SearchBarCtrl.$inject = ['cart', 'teaData'];

    function SearchBarCtrl(cart, teaData) {
        var vm = this;
        vm.categories = teaData.getCategories();

        vm.numCartItems = function() {
            return cart.getNumItems();
        };

        vm.setCategory = function(e) {
            console.log(e);
        };
    }
})();

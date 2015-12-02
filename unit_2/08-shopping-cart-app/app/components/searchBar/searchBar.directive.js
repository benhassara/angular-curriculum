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

    SearchBarCtrl.$inject = ['cart', 'teaData', 'searchValues'];

    function SearchBarCtrl(cart, teaData, searchValues) {
        var vm = this;
        vm.categories = teaData.getCategories();

        vm.numCartItems = function() {
            return cart.getNumItems();
        };

        vm.updateCategory = function() {
            searchValues.category(vm.category);
        };

        vm.updateName = function() {
            searchValues.name(vm.searchName);
        };
    }
})();

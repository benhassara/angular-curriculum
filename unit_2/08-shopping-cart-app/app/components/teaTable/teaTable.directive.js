(function() {
    'use strict';

    angular.module('app.components.teaTable')
    .directive('teaTable', teaRowDirective);

    function teaRowDirective() {
        return {
            restrict: 'EA',
            scope: {
                teaData: '='
            },
            templateUrl: 'app/components/teaTable/teaTable.html',
            controller: TeaTableCtrl,
            controllerAs: 'vm'
        };
    }

    TeaTableCtrl.$inject = ['teaData', 'searchValues'];

    function TeaTableCtrl(teaData, searchValues) {
        var vm = this;
        vm.teas = teaData.getTeaData();

        vm.getCategory = function() {
            searchValues.category();
        };

        vm.getName = function() {
            searchValues.name();
        };

        vm.filterCategories = function(teaCategories) {
            if (searchValues.category() === '') { return true; }
            return teaCategories.indexOf(searchValues.category()) !== -1;
        };

        // vm.categorySearch = { categories: searchValues.category() };
        vm.nameSearch = function(value) {
            var name = searchValues.name().toLowerCase();
            var teaName = value.name.toLowerCase();

            return teaName.search(name) !== -1;
        };

        vm.catSearch = function(value) {
            var category = searchValues.category();
            // if the dropdown category is in the teaObject.categories array
            var inTeaCategories = value.categories.indexOf(category) !== -1;
            // if the dropdown is 'Any', then want to show all teas
            var allCategories = category === '';

            return (inTeaCategories || allCategories) ? true : false;
        };
    }
})();

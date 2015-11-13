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
    }
})();

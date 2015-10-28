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

    TeaTableCtrl.$inject = ['teaData'];

    function TeaTableCtrl(teaData) {
        var vm = this;
        vm.teas = teaData.getTeaData();
    }
})();

/* *** Data that needs to be passed in to populate the table data ***
- img url
- name of the tea
- price
- caffeine scale
- ingredients
- rating
- in stock boolean
- categories
*/

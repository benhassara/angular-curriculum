(function() {
    'use strict';

    angular.module('app.components.teaRow')
        .directive('teaRow', teaRowDirective);

    function teaRowDirective() {
        return {
            restrict: 'A',
            scope: {
                tea: '='
            },
            templateUrl: 'app/components/teaRow/teaRow.html',
            controller: TeaRowCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    function TeaRowCtrl() {
        var vm = this;
        vm.quantity = 1;

        vm.setQuantity = function($event) {
            vm.quantity = $event.target.innerHTML;
        };
    }
})();

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
            bindToController: true,
        };
    }

    TeaRowCtrl.$inject = ['cart'];

    function TeaRowCtrl(cart) {
        var vm = this;
        vm.quantity = 1;

        vm.setQuantity = function($event) {
            vm.quantity = Number($event.target.innerHTML);
        };

        vm.addToCart = function() {
            cart.addToCart({
                name: vm.tea.name,
                imageUrl: vm.tea.imageUrl,
                price: vm.tea.price,
                quantity: +vm.quantity
            });
        };
    }
})();

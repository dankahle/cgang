angular.module('table')
    .directive('dkTable2', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                tableData: '=',
                tableColumns: '='
            },
            templateUrl: 'app/table/directives/dkTable2/dkTable2.html',
            controllerAs: 'vm',
            bindToController: true,
            controller: function ($scope) {
                var vm = $scope.vm;

                $scope.$watch('vm.tableData', function (newVal) {

                    if (!newVal) {
                        return;
                    }

                    vm.headers = _.map(vm.tableColumns, 'header')
                    vm.keys = _.map(vm.tableColumns, 'key')

                    if (!vm.tableData.length || !vm.headers.length || !vm.keys.length) {
                        vm.empty = true;
                        return;
                    }
                });

            }
        };
    });

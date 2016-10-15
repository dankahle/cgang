angular.module('table')
    .directive('dkTable', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                tableData: '=',
            },
            templateUrl: 'app/table/directives/dkTable/dkTable.html',
            link: function ($scope, element, attrs, fn) {


                $scope.$watch('tableData', function () {

                    if (!$scope.tableData.length) {
                        $scope.empty = true;
                        return;
                    }

                    $scope.keys = Object.keys($scope.tableData[0]);
                });

            }
        };
    });

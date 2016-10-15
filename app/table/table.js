angular.module('table', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('table').config(function($stateProvider) {

    $stateProvider.state('Table', {
        url: '/table',
        templateUrl: 'app/table/controllers/Table/Table.html'
    });
    /* Add New States Above */

});


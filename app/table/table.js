angular.module('table', ['ui.bootstrap', 'ui.router']);

angular.module('table').config(function ($stateProvider) {

    $stateProvider.state('table', {
        url: '/table',
        templateUrl: 'app/table/controllers/Table/Table.html',
    });
    /* Add New States Above */

});


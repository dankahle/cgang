angular.module('table')
    .controller('TableCtrl', function ($scope, Users) {
        var vm = this;

        Users.getUsers()
            .then(function (users) {
                vm.users = users;
            });

/*
        vm.userColumns = [
            {key: 'name', header: 'Name'},
            {key: 'age', header: 'Age'}
        ];
*/


    });

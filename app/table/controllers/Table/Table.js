angular.module('table')
    .controller('TableCtrl', function ($scope, Users) {
        var page = this;
        page.val = 'stuff';

        Users.getUsers()
            .then(function (users) {
                page.users = users;
            });

        page.userColumns = [
            {key: 'name', header: 'My Name'},
            {key: 'age', header: 'My Age'}
        ];


    });
// one

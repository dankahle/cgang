angular.module('table')
    .factory('Users', function ($q) {

        var User = {};

        var users = [
            {id: 1, name: 'dank', age: 50},
            {id: 2, name: 'carl', age: 60}
        ];

        User.getUsers = function () {
            return $q.resolve(users);
        };

        return User;
    });

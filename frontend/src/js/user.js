angular.module('geekstagram', [])
    .controller('userController', function($http) {
        var user = this;
        var url = 'http://localhost:8000';
        usersList = [];

        /**
         * Aliette Ruppert
         * Get one user by its id
         *
         * @param user
         */
        usersList.getUser = function(user) {
            $http.get(url + '/api/users/' + user.id).
                then(function(response) {
                    usersList = response.data;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Add a new user
         */
        usersList.addNewUser = function() {
            $http.post(url + '/api/users', { name: usersList.userName, pseudo: usersList.pseudo, password: usersList.password, mailAddress: usersList.mailAddress, createdAt: new Date() }).
                then(function(response) {
                    usersList.push(response.data);
                    usersList.userName = '';
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update a user's data
         *
         * @param user
         */
        usersList.updateUser = function(user) {
            $http.put(url + '/api/users/' + user.id, { name: user.name, pseudo: user.pseudo, password: user.password, mailAddress: user.mailAddress }).
                then(function() {
                    user.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update a user's name
         *
         * @param user
         */
        usersList.patchName = function(user) {
            $http.patch(url + '/api/users/' + user.id, { name: user.name }).
                then(function() {
                    user.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update a user's nickname
         *
         * @param user
         */
        usersList.patchNickname = function(user) {
            $http.patch(url + '/api/users/' + user.id, { pseudo: user.pseudo }).
                then(function() {
                    user.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update a user's password
         *
         * @param user
         */
        usersList.patchPassword = function(user) {
            $http.patch(url + '/api/users/' + user.id, { password: user.password }).
                then(function() {
                    user.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update a user's email
         *
         * @param user
         */
        usersList.patchEmail = function(user) {
            $http.patch(url + '/api/users/' + user.id, { mail: user.mail }).
                then(function() {
                    user.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Delete a user
         *
         * @param user
         */
        usersList.deleteUser = function(user) {
            $http.delete(url + '/api/users/' + user.id).
                then(function() {
                    var index = usersList.indexOf(user);
                    usersList.splice(index, 1);
                }, function() {
                    alert('An error occured');
                });
        };
    });

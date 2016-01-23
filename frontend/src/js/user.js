angular.module('Geekstagram.user', [])
    .controller('userController', function($http, $location) {
        var self = this;
        var urlUser = '/Geekstagram/frontend/src/data/user.json';
        var urlPost = '/Geekstagram/frontend/src/data/post.json';
        self.user = {};
        self.postList = [];

        if (!localStorage.getItem('isConnected')) {
            $location.path('/login');
        }

        /**
         * Aliette Ruppert
         * Get one user by its id
         */
        self.getUser = function() {

            $http.get(urlUser).
                then(function(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        if (response.data[i].id === parseInt(localStorage.getItem('userId'))) {
                            self.user.name = response.data[i].name;
                            self.user.email = response.data[i].email;
                            self.user.password = response.data[i].password;
                        }
                    }
                });
        };

        /**
         * Aliette Ruppert
         * Update a user's data
         *
         * @param user
         */
        self.updateUser = function(user) {
            $http.put(urlUser + user.id, { name: user.name, password: user.password, email: user.email}).
                then(function() {

                }, function() {
                    alert('An error occured');
                });
                user.updating = false;
        };

        /**
         * Aliette Ruppert
         * Get all posts
         */
        self.getAllPosts = function() {
            $http.get(urlPost).
                then(function(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        if (response.data[i].user === parseInt(localStorage.getItem('userId'))) {
                            self.postList.push(response.data[i]);
                        }
                    }
                }, function() {
                    alert('An error occured');
                });
        };
    });

angular.module('Geekstagram.home', [])
    .controller('homeController', function($http, $location) {
        var self = this;
        var urlPost = '/Geekstagram/frontend/src/data/post.json';
        var urlUser = '/Geekstagram/frontend/src/data/user.json';
        self.postList = [];
        self.userList = [];
        self.content = '';

        if (!localStorage.getItem('isConnected')) {
            $location.path('/login');
        }

        /**
         * Aliette Ruppert
         * Get all the users' app
         */
        self.getUsers = function() {
            $http.get(urlUser).
            then(function(response) {
                self.userList = response.data;
            });
        };

        /**
         * Aliette Ruppert
         * Get one user by its id
         *
         * @param id
         * @returns {*}
         */
        self.getUser = function(id) {
            for(var i = 0; i < self.userList.length; i++) {
                if (self.userList[i].id === id) {
                    return self.userList[i];
                }
            }
        };

        /**
         * Aliette Ruppert
         * Get all posts
         */
        self.getAllPosts = function() {
            $http.get(urlPost).
                then(function(response) {
                    self.postList = response.data;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Submit a new post
         */
        self.addNewPost = function() {
            var post = { content: self.content, date: new Date(), user: parseInt(localStorage.getItem("userId")) };
            $http.post(urlPost, post).
            then(function(response) {

            }, function() {
                alert('An error occured');
            });
            self.postList.push(post);
            self.content = '';
        };
    });
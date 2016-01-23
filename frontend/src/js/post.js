angular.module('Geekstagram', [])
    .controller('PostController', function($http) {
        var self = this;
        var url = '/Geekstagram/frontend/src/data/post.json';
        self.postList = [];

        /**
         * Aliette Ruppert
         * Get all user's posts
         *
         * @param user
         */
        self.getAllUsersPosts = function(user) {
            $http.get(url).
                then(function(response) {
                    self.postList = response.data;
                }, function() {
                alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Get one post by its id
         *
         * @param post
         */
        self.getPost = function(post) {
            $http.get(url).
                then(function(response) {
                    self.postList = response.data;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update a post's data
         *
         * @param post
         */
        self.updatePost = function(post) {
            $http.put(url).
                then(function() {
                    post.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Delete a post
         *
         * @param post
         */
        self.deletePost = function(post) {
            $http.delete(url).
                then(function() {
                    var index = self.indexOf(post);
                    self.splice(index, 1);
                }, function() {
                    alert('An error occured');
                });
        };
    });

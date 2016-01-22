angular.module('Geekstagram', [])
    .controller('PostController', function($http) {
        var postsList = this;
        var url = 'http://localhost:8000';
        postsList.user = [];

        /**
         * Aliette Ruppert
         * Get all posts
         */
        postsList.getAllPosts = function() {
            $http.get(url + '/api/posts').
                then(function(response) {
                    postsList.user = response.data;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Get all user's posts
         *
         * @param user
         */
        postsList.getAllUsersPosts = function(user) {
            $http.get(url + '/api/users/' + user.id + '/posts').
                then(function(response) {
                    postsList.user = response.data;
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
        postsList.getPost = function(post) {
            $http.get(url + '/api/posts/' + post.id).
                then(function(response) {
                    postsList.user = response.data;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Submit a new post
         */
        postsList.addNewPost = function() {
            $http.post(url + '/api/posts', { title: postsList.title, content: postsList.content, user: postsList.user }).
                then(function(response) {
                    postsList.user.push(response.data);
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
        postsList.updatePost = function(post) {
            $http.put(url + '/api/posts/' + post.id, { title: post.title, content: post.content, user: post.user }).
                then(function() {
                    post.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update post's title
         *
         * @param post
         */
        postsList.patchTitle = function(post) {
            $http.patch(url + 'api/posts/' + post.id, { title: post.title }).
                then(function() {
                    post.updating = false;
                }, function() {
                    alert('An error occured');
                });
        };

        /**
         * Aliette Ruppert
         * Update post's content
         *
         * @param post
         */
        postsList.patchContent = function(post) {
            $http.patch(url + '/api/posts/' + post.id, { content: post.content }).
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
        postsList.deletePost = function(post) {
            $http.delete(url + '/api/posts/' + post.id).
                then(function() {
                    var index = postsList.indexOf(post);
                    postsList.splice(index, 1);
                }, function() {
                    alert('An error occured');
                });
        };
    });

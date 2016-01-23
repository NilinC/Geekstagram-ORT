angular.module('Geekstagram.menu', [])
    .controller('menuController', function($location, $rootScope, $http) {
        var self = this;
        var urlUser = '/Geekstagram/frontend/src/data/user.json';
        self.user = {};
        self.isConnected = false;
        self.userList = [];
        self.searchResults = [];

        self.initUser = function() {
            self.user = {
                name: localStorage.getItem("userName"),
                id: localStorage.getItem("userId")
            };
            self.isConnected = localStorage.getItem("isConnected");
        };

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

        self.disconnect = function() {
            localStorage.removeItem("userName");
            localStorage.removeItem("userId");
            localStorage.removeItem("isConnected");
            self.initUser();
            $location.path('/login');
        };

        self.search = function(user) {
            self.searchResults = [];

            if (user) {
                for (var i = 0; i < self.userList.length; i++) {
                    var userName = self.userList[i].name.toLowerCase();
                    var userLowerCase = user.toLowerCase();
                    if (userName.indexOf(userLowerCase) != -1) {
                        self.searchResults.push({ name: self.userList[i].name, id: self.userList[i].id });
                    }
                }
            }
        };

        self.seeUser = function(id) {
            $location.path('/user/' + id);
        };

        $rootScope.$on('initUserConnection', self.initUser);
    });

angular.module('Geekstagram.signIn', [])
    .controller('signInController', function($location, $rootScope) {
        var self = this;

        self.login = function(name, password) {
            localStorage.setItem("userName", name);
            localStorage.setItem("userId", 1);
            localStorage.setItem("isConnected", true);
            $rootScope.$emit('initUserConnection');
            $location.path('/');
        }
    });

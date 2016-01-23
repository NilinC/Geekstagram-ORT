'use strict';

var app = angular.module('Geekstagram', [
    'ngRoute',
    'Geekstagram.home',
    'Geekstagram.menu',
    'Geekstagram.signIn',
    'Geekstagram.user'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        // Système de routage
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .when('/profil', {
                templateUrl: 'views/user_profile.html',
                controller: 'userController',
                controllerAs: 'userCtrl'
            })
            .when('/modifier-post/:id', {
                templateUrl: 'views/edit_post.html',
                controller: 'postController',
                controllerAs: 'postCtrl'
            })
            .when('/login', {
                templateUrl: 'views/signin.html',
                controller: 'signInController',
                controllerAs: 'signInCtrl'
            })
    }
]);
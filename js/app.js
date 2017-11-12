'use strict';

/**
 * @ngdoc overview
 * @name petSpaApp
 * @description
 * # petSpaApp
 *
 * Main module of the application.
 */
angular.module('petSpaApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/global', {
                controller: 'GlobalCtrl',
                templateUrl: 'global.html'
            })
            .when('/specific', {
                controller: 'SpecificCtrl',
                templateUrl: 'specific.html'
            })
            .otherwise({
                redirectTo: '/global'
            });
    });
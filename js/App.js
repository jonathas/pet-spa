angular.module('petApp', ['ngRoute'])
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
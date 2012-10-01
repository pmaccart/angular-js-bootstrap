/* Route Configuration */
define(['app', 'controllers/HomeCtrl'],
    function (app, HomeCtrl) {
        'use strict';

        app.config(
            ['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/home', {templateUrl:'html/views/home.html', controller:HomeCtrl})
                    .otherwise({redirectTo:'/home'});
            }]);
    });

/* Main Application Configuration */
//define(['angular', 'controllers/Home'],
//    function (angular, HomeCtrl) {
//        var module = angular.module('bootstrap', []);
//        module.config(
//            ['$routeProvider', function ($routeProvider) {
//                $routeProvider.when('/home', {templateUrl:'html/views/home.html', controller:HomeCtrl})
//                    .otherwise({redirectTo:'/home'});
//            }]);
//
//        return module;
//    });

define(['angular', 'controllers/controllers'],
    function (angular) {
        'use strict';

        var module = angular.module('bootstrap', ['bootstrap.controllers']);
        return module;
    });

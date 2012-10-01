/* Home Controller */
define(['controllers/controllers'], function (controllers) {
    'use strict';
    return controllers.controller('HomeController', ['$scope',
        function ($scope) {
            $scope.name = 'Phil';
        }
    ]);

});
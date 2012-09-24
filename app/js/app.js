'use strict';

angular.module('brownbag', []).config(
    ['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/inbox', {templateUrl: 'partials/inbox.html', controller: InboxCtrl})
            .when('/inbox/:messageId', {templateUrl: 'partials/message.html', controller: MessageCtrl})
            .otherwise({redirectTo: '/inbox'});

    }]);
'use strict';

/* Controllers */


function InboxCtrl($scope, $http) {

    $scope.username = "Phil";
    $scope.sortFields = [
        "status", "from", "subject", "date"
    ];
    $scope.sortBy = "date";
    $scope.doSortBy = function(sortBy) {
        $scope.sortBy = sortBy;
        return false;
    };

    $scope.openMessage = function(message) {
        message.status = "read";
        console.log("Marked message " + message.id + " as read");
    };

    $http({
        method:'GET',
        url:'data/messages.json'
    }).success(function (data) {
            data.forEach(function(msg) {
                if (msg.date) msg.date =  new Date(Date.parse(msg.date));
            });
            $scope.messages = data;
        }).error(function (data, status) {
            alert("Oops! Status = " + status);
        });

}
InboxCtrl.$inject = ["$scope", "$http"]

function MessageCtrl($scope, $routeParams, $http) {
    var messageId = $routeParams.messageId;
    $http({
        method:'GET',
        url:'data/message' + messageId + '.json'
    }).success(function (data) {
            $scope.message = data;
        }).error(function (data, status) {
            alert('Failed to retrieve message; status=' + status);
        });
}

MessageCtrl.$inject = ['$scope', '$routeParams', '$http'];

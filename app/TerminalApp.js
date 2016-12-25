var terminalApp = angular.module('TerminalApp', []);

terminalApp.controller('MainController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
    $scope.createUserFormIsShown = true;
    $scope.editUserFormIsShown = false;
    $scope.createUserData = {};

    //create user
    $scope.createUser = function () {
        console.log('Hi');
        console.log($scope.createUserData);
        $http({
            url: 'https://api.telegra.ph/createAccount',
            method: 'POST',
            data: $httpParamSerializerJQLike($scope.createUserData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
}]);

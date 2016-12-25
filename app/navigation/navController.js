'use strict';

terminalApp.controller('NavController', ['$scope', function ($scope) {

    $scope.createUserFormIsShown = true;
    $scope.editUserFormIsShown = false;

    $scope.createUserTab = function () {
        $scope.createUserFormIsShown = true;
        $scope.editUserFormIsShown = false;
    };

    $scope.editUserTab = function () {
        $scope.createUserFormIsShown = false;
        $scope.editUserFormIsShown = true;
    };

}]);
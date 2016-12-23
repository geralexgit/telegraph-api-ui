var terminalApp = angular.module('TerminalApp', []);

terminalApp.controller('MainController', function($scope) {
    $scope.createUserFormIsShown = false;
    $scope.editUserFormIsShown = true;
});

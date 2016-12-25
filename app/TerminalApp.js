var terminalApp = angular.module('TerminalApp', []);

terminalApp.controller('MainController', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {

    $scope.user = {};
    $scope.access_token = JSON.parse(localStorage.getItem('token')) || {};
    
}]);

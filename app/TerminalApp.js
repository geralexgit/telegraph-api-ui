var terminalApp = angular.module('TerminalApp', ['ngRoute']);

terminalApp.controller('MainController', ['$scope', '$location', '$http', '$httpParamSerializerJQLike', function ($scope, $location, $http, $httpParamSerializerJQLike) {

    $scope.access_token = JSON.parse(localStorage.getItem('token')) || {};
    $scope.access_token = JSON.parse(localStorage.getItem('access_token'));
    $scope.short_name = JSON.parse(localStorage.getItem('short_name'));
    $scope.author_name = JSON.parse(localStorage.getItem('author_name'));
    $scope.author_url = JSON.parse(localStorage.getItem('author_url'));

    $scope.accountInfo = {
        access_token: $scope.access_token,
        short_name: $scope.short_name,
        author_name: $scope.author_name,
        author_url: $scope.author_url
    };

    $scope.createNewAccount = function () {
        $location.path('/create-account');
    };

    $scope.editAccount = function () {
        $location.path('/edit-account-info');
    };

}]);

terminalApp.config(function ($routeProvider) {
    $routeProvider
        .when('/create-account', {
            templateUrl: 'app/createAccount/createAccountTemplate.html',
            controller: 'createAccountController'
        })
        .when('/edit-account-info', {
            templateUrl: 'app/editAccountInfo/editAccountInfoTemplate.html',
            controller: 'editAccountInfoController'
        });
});


var terminalApp = angular.module('TerminalApp', ['ngRoute']);

terminalApp.controller('MainController', ['$scope', '$location', '$http', '$httpParamSerializerJQLike', function ($scope, $location, $http, $httpParamSerializerJQLike) {

    $scope.accountInfo = {
        access_token: JSON.parse(localStorage.getItem('access_token')) || {},
        short_name: JSON.parse(localStorage.getItem('short_name')),
        author_name: JSON.parse(localStorage.getItem('author_name')),
        author_url: JSON.parse(localStorage.getItem('author_url'))
    };

    $scope.createNewAccount = function () {
        $location.path('/create-account');
    };

    $scope.editAccount = function () {
        $location.path('/edit-account-info');
    };

    $scope.revokeToken = function () {
        $location.path('/revoke-access-token');
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
        })
        .when('/revoke-access-token', {
            templateUrl: 'app/revokeAccessToken/revokeAccessTokenTemplate.html',
            controller:  'revokeAccessTokenController'
        });
});


var terminalApp = angular.module('TerminalApp', ['ngRoute']);

terminalApp.controller('MainController', ['$scope', '$location', '$http', '$httpParamSerializerJQLike', 'DataService', function ($scope, $location, $http, $httpParamSerializerJQLike, DataService) {

    $scope.createNewAccount = function () {
        $location.path('/create-account');
    };

    $scope.editAccount = function () {
        $location.path('/edit-account-info');
    };

    $scope.revokeToken = function () {
        $location.path('/revoke-access-token');
    };

    $scope.createNewPage = function () {
        $location.path('/create-page');
    };

    $scope.getListOfPages = function () {
        $location.path('/get-page-list');
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
            controller: 'revokeAccessTokenController'
        })
        .when('/create-page', {
            templateUrl: 'app/createPage/createPageTemplate.html',
            controller: 'createPageController'
        })
        .when('/get-page-list', {
            templateUrl: 'app/getPageList/getPageListTemplate.html',
            controller: 'getPageListController'
        });
});


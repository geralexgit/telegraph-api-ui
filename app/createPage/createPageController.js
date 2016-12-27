terminalApp.controller('createPageController', ['$scope', '$http', '$httpParamSerializerJQLike', 'DataService',
    function ($scope, $http, $httpParamSerializerJQLike, DataService) {
        $scope.pageText = '';
        $scope.accountInfo = DataService.accountInfo;
        $scope.pageContent = angular.copy($scope.accountInfo);
        $scope.pageContent.content = [{"tag":"p","children":$scope.pageText}];
    }]);
terminalApp.controller('createPageController', ['$scope', '$http', '$httpParamSerializerJQLike', 'DataService',
    function ($scope, $http, $httpParamSerializerJQLike, DataService) {
        $scope.accountInfo = DataService.accountInfo;
    }]);
terminalApp.controller('getPageListController', ['$scope', '$http', '$httpParamSerializerJQLike', 'DataService',
    function ($scope, $http, $httpParamSerializerJQLike, DataService) {
        
        var url = "https://api.telegra.ph/getPageList";

        $scope.access_token = DataService.accountInfo.access_token;
        $scope.offset = 0;
        $scope.limit = 50;
    }]);
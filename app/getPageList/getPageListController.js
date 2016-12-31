terminalApp.controller('getPageListController', ['$scope', '$http', '$httpParamSerializerJQLike', 'DataService',
    function ($scope, $http, $httpParamSerializerJQLike, DataService) {

        var url = "https://api.telegra.ph/getPageList";

        $scope.access_token = DataService.accountInfo.access_token;
        $scope.offset = 0;
        $scope.limit = 50;

        $scope.getPageList = function () {

            var data = {
                access_token: $scope.access_token,
                offset: $scope.offset = 0,
                limit: $scope.limit
            };
            console.log(data);

            $http.get(url, {params: data}).then(function (response) {
                if (response.data.ok === true) {
                    console.log('Everything is fine');
                    console.log(response.data.result);
                    $scope.pages = response.data.result.pages;
                } else {
                    console.log('Something went wrong');
                }
            });
        };


    }]);
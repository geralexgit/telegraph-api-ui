terminalApp.controller('editAccountInfoController', ['$scope', '$http', '$httpParamSerializerJQLike','DataService', function ($scope, $http, $httpParamSerializerJQLike, DataService) {

    $scope.accountInfo = DataService.accountInfo;

    $scope.textEdit = false;

    $scope.getAccountInfo = function () {
        var settings = ['short_name', 'author_name', 'author_url'];
        $scope.accountToGetInfo = {
            access_token: $scope.accountInfo.access_token,
            fields: JSON.stringify(settings)
        };
        $http({
            url: 'https://api.telegra.ph/getAccountInfo',
            method: 'POST',
            data: $httpParamSerializerJQLike($scope.accountToGetInfo),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            if (response.data.ok === true) {
                console.log('All ok!');
                $scope.accountInfo = {
                    access_token: $scope.accountInfo.access_token,
                    author_name: response.data.result.author_name,
                    author_url: response.data.result.author_url,
                    short_name: response.data.result.short_name
                }
            } else {
                console.warn('Something went wrong');
            }
        }, function (error) {
            console.log(error);
        });
    };
    $scope.editAccountInfo = function () {
        $http({
            url: 'https://api.telegra.ph/editAccountInfo',
            method: 'POST',
            data: $httpParamSerializerJQLike($scope.accountInfo),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            if (response.data.ok === true) {
                $scope.accountToGetInfo = {
                    author_name: response.data.result.author_name,
                    author_url: response.data.result.author_url,
                    short_name: response.data.result.short_name
                };
                localStorage.setItem('short_name', JSON.stringify(response.data.result.short_name));
                localStorage.setItem('author_name', JSON.stringify(response.data.result.author_name));
                localStorage.setItem('author_url', JSON.stringify(response.data.result.author_url));

                console.log('All ok!');
            } else {
                console.warn('Something went wrong');
            }
        }, function (error) {
            console.log(error);
        });
    };
}]);
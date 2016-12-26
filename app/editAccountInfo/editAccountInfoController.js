terminalApp.controller('editAccountInfoController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.textEdit = false;

    $scope.getAccountInfo = function () {
        $scope.params = $httpParamSerializerJQLike($scope.getUserInfo);
        var settings = ['short_name', 'author_name', 'author_url'];
        $scope.accountInfo = {
            access_token: $scope.accountInfo.access_token,
            fields: JSON.stringify(settings)
        };
        console.log($scope.accountInfo);
        console.log($scope.params);
        console.log($scope.access_token);
        $http({
            url: 'https://api.telegra.ph/getAccountInfo',
            method: 'POST',
            data: $httpParamSerializerJQLike($scope.accountInfo),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.ok === true) {
                console.log('All ok!');
                $scope.accountInfo = {
                    access_token: $scope.accountInfo.access_token,
                    author_name: response.data.result.author_name,
                    author_url: response.data.result.author_url,
                    short_name: response.data.result.short_name
                }
            } else {
                console.log('Something went wrong');
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
            console.log(response);
            if (response.data.ok === true) {
                console.log('All ok!');
                console.log(response.data);
                $scope.userInfo = {
                    author_name: response.data.result.author_name,
                    author_url: response.data.result.author_url,
                    short_name: response.data.result.short_name
                }
            } else {
                console.log('Something went wrong');
            }
        }, function (error) {
            console.log(error);
        });
    };
}]);
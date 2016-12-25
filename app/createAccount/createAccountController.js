terminalApp.controller('createAccountController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
    $scope.createAccountData = {};
    $scope.createAccount = function () {
        console.log('Hi');
        console.log($scope.createAccountData);
        $http({
            url: 'https://api.telegra.ph/createAccount',
            method: 'POST',
            data: $httpParamSerializerJQLike($scope.createAccountData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            console.log(response);
            /*{ "ok": true,
             "result": {
             "short_name": "myName",
             "author_name": "superAuthor",
             "author_url": "http://link.com/",
             "access_token": "fc2f6e55ce85955b9684f2f7ef97126cff96a1f68f029cba496c8097b4be",
             "auth_url": "https://edit.telegra.ph/auth/YIIv6Iwj2swHC9y7YLf4k5xoLYqWEWYCCG5ImB1o2v"
             }}*/
            if (response.data.ok === true) {
                $scope.user = response.data.result;
                $scope.access_token = $scope.user.access_token;
                localStorage.setItem('access_token', JSON.stringify($scope.user.access_token));
            } else {
                console.log('response.data.error');
            }
        }, function (error) {
            console.log(error);
        });
    };
}]);
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
            if (response.data.ok === true) {
                $scope.accountInfo = response.data.result;
                $scope.access_token = $scope.accountInfo.access_token;
                localStorage.setItem('short_name', JSON.stringify($scope.accountInfo.short_name));
                localStorage.setItem('author_name', JSON.stringify($scope.accountInfo.author_name));
                localStorage.setItem('author_url', JSON.stringify($scope.accountInfo.author_url));
                localStorage.setItem('access_token', JSON.stringify($scope.accountInfo.access_token));
                localStorage.setItem('auth_url', JSON.stringify($scope.accountInfo.auth_url));
            } else {
                console.log('response.data.error');
            }
        }, function (error) {
            console.log(error);
        });
    };
}]);
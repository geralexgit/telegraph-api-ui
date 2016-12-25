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
                $scope.user = response.data.result;
                $scope.access_token = $scope.user.access_token;
                localStorage.setItem('short_name', JSON.stringify($scope.user.short_name));
                localStorage.setItem('author_name', JSON.stringify($scope.user.author_name));
                localStorage.setItem('author_url', JSON.stringify($scope.user.author_url));
                localStorage.setItem('access_token', JSON.stringify($scope.user.access_token));
                localStorage.setItem('auth_url', JSON.stringify($scope.user.auth_url));
            } else {
                console.log('response.data.error');
            }
        }, function (error) {
            console.log(error);
        });
    };
}]);
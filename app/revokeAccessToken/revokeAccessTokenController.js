terminalApp.controller('revokeAccessTokenController', ['$scope', '$http', function ($http, $scope) {

    $scope.accountInfo = {
        access_token: JSON.parse(localStorage.getItem('access_token')) || {},
        short_name: JSON.parse(localStorage.getItem('short_name')),
        author_name: JSON.parse(localStorage.getItem('author_name')),
        author_url: JSON.parse(localStorage.getItem('author_url'))
    };

    var token = $scope.accountInfo.access_token;
    console.log(token);

}]);


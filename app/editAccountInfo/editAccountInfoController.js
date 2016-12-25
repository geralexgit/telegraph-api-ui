terminalApp.controller('editAccountInfoController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.access_token = JSON.parse(localStorage.getItem('access_token'));
    $scope.short_name = JSON.parse(localStorage.getItem('short_name'));
    $scope.author_name = JSON.parse(localStorage.getItem('author_name'));
    $scope.author_url = JSON.parse(localStorage.getItem('author_url'));
    //access_token=b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb&short_name=Sandbox&author_name=Anonymous

    $scope.userInfo = {
        access_token: $scope.access_token,
        short_name: $scope.short_name,
        author_name: $scope.author_name,
        author_url: $scope.author_url
    };

    $scope.textEdit = false;


    $scope.getAccountInfo = function () {
        console.log($scope.access_token);

        var settings = ['short_name', 'author_name', 'author_url'];

        $scope.getUserInfo = {
            access_token: $scope.userInfo.access_token,
            fields: settings.toString()
        };

        $scope.params = $httpParamSerializerJQLike($scope.getUserInfo);
        console.log($scope.getUserInfo);
        console.log($scope.params);
        /*
         $http({
         url: 'https://api.telegra.ph/getAccountInfo',
         method: 'POST',
         data: $httpParamSerializerJQLike($scope.getUserInfo),
         headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
         }
         }).then(function (response) {
         console.log(response);
         if (response.data.ok === true) {
         } else {
         }
         }, function (error) {
         console.log(error);
         });*/
    };

}]);
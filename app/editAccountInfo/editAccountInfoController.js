terminalApp.controller('editAccountInfoController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {

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
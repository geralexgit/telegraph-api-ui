terminalApp.controller('editAccountInfoController', ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
    $scope.access_token = JSON.parse(localStorage.getItem('access_token'));

    $scope.getAccountInfo = function(){
        console.log($scope.access_token);
    };
    
}]);
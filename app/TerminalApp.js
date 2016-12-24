var terminalApp = angular.module('TerminalApp', []);

terminalApp.controller('MainController', ['$scope', function($scope) {

    $scope.createUserFormIsShown = true;
    $scope.editUserFormIsShown = false;
    $scope.createUserData = {};

    $scope.createUser = function($scope, $http) {
        console.log('Ji');
        console.log($scope.createUserData);

        /*$http({
                method: 'POST',
                url: 'https://api.telegra.ph/createAccount',
                data: $scope.createUserData, // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {

                console.log(data);

                if (!data.success) {
                    // if not successful, bind errors to error variables
                    $scope.errorName = data.errors.name;
                    $scope.errorSuperhero = data.errors.superheroAlias;
                } else {
                    // if successful, bind success message to message
                    $scope.message = data.message;
                }

            });*/
            
    };
}]);

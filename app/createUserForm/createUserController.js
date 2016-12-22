terminalApp.controller('createUserController', 
	function createUserController($scope, createUserService) {
		$scope.user = createUserService.user;
	});

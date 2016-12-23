terminalApp.controller('editUserController', 
	function editUserController($scope, editUserService) {
		$scope.user = editUserService.user.result;
		$scope.token = user.result.access_token;
	});
var terminalApp = angular.module('TerminalApp', []).directive('createUserForm',
    function () {
        return {
            templateURL: 'app/createUserForm/createUserForm.html'
        }
    });
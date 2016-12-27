terminalApp.factory('DataService', function () {
    return {
        accountInfo: {
            access_token: JSON.parse(localStorage.getItem('access_token')) || {},
            short_name: JSON.parse(localStorage.getItem('short_name')),
            author_name: JSON.parse(localStorage.getItem('author_name')),
            author_url: JSON.parse(localStorage.getItem('author_url')),
            auth_url: JSON.parse(localStorage.getItem('auth_url'))
        }
    }
});
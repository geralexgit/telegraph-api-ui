terminalApp.factory('editUserService', function($scope) {
    return {
        user: {
            "ok": true,
            "result": {
                "short_name": "author short name",
                "author_name": "author full name",
                "author_url": "http://my.link/",
                "access_token": "71273e0302a6ecd05aa4786d45ead88a555a817c15a8ed4cf6da6a0fb702",
                "auth_url": "https://edit.telegra.ph/auth/QGqCFjADqCnR53FtEwSO0slphK8sS7iGLIioZQ2psn"
            }
        }
    }
});

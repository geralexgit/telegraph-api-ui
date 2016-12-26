terminalApp.controller('revokeAccessTokenController', ['$scope', '$http', '$httpParamSerializerJQLike',
    function ($http, $httpParamSerializerJQLike, $scope) {

        $scope.accountInfo = {
            access_token: JSON.parse(localStorage.getItem('access_token')) || {},
            short_name: JSON.parse(localStorage.getItem('short_name')),
            author_name: JSON.parse(localStorage.getItem('author_name')),
            author_url: JSON.parse(localStorage.getItem('author_url')),
            auth_url: JSON.parse(localStorage.getItem('author_url'))//
        };

        $scope.revokeAccessToken = function () {
            console.log('click!');
            $http({
                url: 'https://api.telegra.ph/revokeAccessToken',
                method: 'POST',
                data: $httpParamSerializerJQLike($scope.accountInfo.access_token),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                //{"ok":true,"result":{"access_token":"7aa16dc70a7dd921524216d2d5bc7ccb12526712aa383ea3a07f852f7e42","auth_url":"https:\/\/edit.telegra.ph\/auth\/KNm58rdkIW58pA5yzLquKW4KwCxY2S2KFpPLQ05wV8"}}
                if (response.data.ok === true) {
                    console.log('Everything is fine!');
                    $scope.accountInfo = {
                        access_token: $scope.accountInfo.access_token,
                        auth_url: response.data.result.auth_url
                    };
                    localStorage.setItem('access_token', JSON.stringify(response.data.result.access_token));
                    localStorage.setItem('auth_url', JSON.stringify(response.data.result.auth_url));
                } else {
                    console.warn('Something went wrong..');
                }
            }, function (error) {
                console.log(error);
            });
        };
    }]);


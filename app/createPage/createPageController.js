terminalApp.controller('createPageController', ['$scope', '$http', '$httpParamSerializerJQLike', 'DataService',
    function ($scope, $http, $httpParamSerializerJQLike, DataService) {

        var url = 'https://api.telegra.ph/createPage/';

        $scope.pageText = '';

        $scope.accountInfo = DataService.accountInfo;

        $scope.pageContent = {};

        $scope.$watch('pageText', function (value) {
            $scope.pageContent.content = [{"tag": "p", "children": JSON.toString([value])}];
        });

        $scope.createPage = function () {
            $scope.data = {
                access_token: $scope.accountInfo.access_token,
                title: $scope.pageContent.title,
                author_name: $scope.accountInfo.author_name,
                author_url: $scope.accountInfo.author_url,
                content: $scope.pageContent.content,
                return_content: $scope.pageContent.return_content
            };
            $http({
                url: url,
                method: 'POST',
                data: $httpParamSerializerJQLike($scope.data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                if (response.data.ok === true) {
                    console.log('Everything is fine');
                    console.log(response.data.result);
                    $scope.response = response.data.result;
                } else {

                    console.log('Something went wrong');
                    console.log(response);
                }
            });
        };
    }]);

/*$scope.createPage = function () {


 $http.post(url, {params: data}).then(function (response) {
 if (response.data.ok === true) {
 console.log('Everything is fine');
 console.log(response.data.result);
 $scope.response = response.data.result;
 } else {
 console.log('Something went wrong');
 }
 })
 }*/
/*
 */


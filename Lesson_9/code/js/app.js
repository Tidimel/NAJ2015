angular.module('app', []).controller('AppCtrl', function ($scope, $http) {
    
	$scope.results = [];

	$scope.clickElement = function (element) {
         
	};
    $scope.loadUsers = function () {
        
        alert("A");
        $http.get('http://ludzkiecialo.pl/api/v1/ranking/show?user_id=1',{dataType: 'jsonp'})
            .success(function (data, status, headers, config, statusText) {
                console.log(data);
            }).error(function (data, status, headers, config, statusText) {

        });
    };
});

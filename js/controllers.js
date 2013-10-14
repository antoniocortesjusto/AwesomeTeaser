var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope, $route) {
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
  $scope.$location = $location;
  
});

controllers.controller('HomeCtrl', function($scope, $route){
	
  	
});

controllers.controller('RegisterCtrl', function($scope, $route, $routeParams){
	
	$scope.params = {
		groupId : $routeParams.groupId
	};
	

});



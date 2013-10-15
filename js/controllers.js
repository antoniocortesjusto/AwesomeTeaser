var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope, $route) {
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
  $scope.$location = $location;

  
});

controllers.controller('HomeCtrl', function($scope, $route, MailChimp){
	
  

  	var handlePingSuccess = function(data, status){
  		console.log("ChimpPing Post success ==> " + "data.msg: " + data.msg + " status: " + status);
      	$scope.chimpPing = data.msg;
  	};

  	var handlePingError = function(data, status){
  		console.log("ChimpPing Post error ==> " + "data: " + data.name + " status: " + status);
      	$scope.chimpPing = data.name;
  	};

  	var handleGroupsSuccess = function(data, status){
  		console.log("MailChimp.getGroups Post success ==> " + "data.groups: " + data + " status: " + status);
      	$scope.groups = data;
  	};

  	var handleGroupsError = function(data, status){
  		console.log("MailChimp.getGroups Post error ==> " + "data: " + data.name + " status: " + status);
      	$scope.groups = data.name;
  	};

  	var handleAddGroupsSuccess = function(data, status){
  		console.log("MailChimp.getGroups Post success ==> " + "data.groups: " + data + " status: " + status);
      	$scope.noGroup = data.complete;
  	};

  	var handleAddGroupsError = function(data, status){
  		console.log("MailChimp.getGroups Post error ==> " + "data: " + data.name + " status: " + status);
      	$scope.noGroup = data.name;
  	};

  	var handleAddGroupsSuccess2 = function(data, status){
  		console.log("MailChimp.getGroups Post success ==> " + "data.complete: " + data + " status: " + status);
      	$scope.tGroup = data.complete;
  	};

  	var handleAddGroupsError2 = function(data, status){
  		console.log("MailChimp.getGroups Post error ==> " + "data: " + data.name + " status: " + status);
      	$scope.tGroup = data.name;
  	};

  	MailChimp.ping().success(handlePingSuccess).error(handlePingError);
  	MailChimp.getGroups().success(handleGroupsSuccess).error(handleGroupsError);
  	MailChimp.addGroup('noGroup').success(handleAddGroupsSuccess).error(handleAddGroupsError);
  	MailChimp.addGroup('toñoGroup').success(handleAddGroupsSuccess2).error(handleAddGroupsError2);
  	
});

controllers.controller('RegisterCtrl', function($scope, $route, $routeParams){
	
	$scope.params = {
		groupId : $routeParams.groupId
	};
	

});



var app = angular.module('choreApp', []);


app.controller("ChoreCtrl", function($scope){
	$scope.logChore = function(chore){
		console.log(chore + " is done!");
	};
});
app.directive("kid", function(){
	return{
		restrict: "E",
		scope: {
			done:"&"
		},
		template: '<input type="text" class="form-control" ng-model="chore">' +
				'{{chore}}' +
				'<div class="btn btn-primary" ng-click="done({chore:chore})">Done!</div>'

	};
});
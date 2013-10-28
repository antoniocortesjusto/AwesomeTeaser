var app = angular.module('drinkApp', []);


app.controller("AppCtrl", function($scope){
	
});


app.directive("drink", function(){
	return{
		scope:{
			flavor: "@"
		},
		template: '<div class="btn btn-primary" ">{{flavor}}</div>'
		
	};
});
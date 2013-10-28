
var myApp = angular.module('twitterApp',[]);

myApp.directive('enter', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs){
			element.bind("mouseenter",function(){
				console.log("Estoy dentro!!");
				scope.$apply("loadMoreTweets()");
			});
		}
	};
});


myApp.controler("AppCtrl", function($scope){
	$scope.loadMoreTweets=function(){
		alert("Loading more Tweets");
	}
});



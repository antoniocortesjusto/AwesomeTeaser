
var myApp = angular.module('superhero',[]);

myApp.directive('superman', function() {
	return {
		restrict: "E",
		template: "<div><h2>I am Superman</h2></div>"
	};
});







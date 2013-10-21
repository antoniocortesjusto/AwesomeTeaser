var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope, $navigate) {
  $scope.$navigate = $navigate;
  
});

controllers.controller('HomeCtrl', function($scope, Results, Search){
	$scope.results = Results;
	$scope.search = Search;

	 $scope.resetInput = function(){
   		$scope.search.message = "";
   		$scope.showClear = false;

   		console.log("reset input! showClear = false");
	 }
  	
});

controllers.controller('FriendsCtrl', function($scope, Friends){
	$scope.friends = Friends;

});


controllers.controller('ProfileCtrl', function($scope, User){
	$scope.user = User;

});

controllers.controller('TripsCtrl', function($scope){
	

});

controllers.controller('FooterCtrl', function($scope) {
	var initialScreenSize = window.innerHeight;
	window.addEventListener("resize", function() {
    if(window.innerHeight < initialScreenSize){
        $("[data-role=footer]").hide();
    }
    else{
        $("[data-role=footer]").show();
    }
});
});
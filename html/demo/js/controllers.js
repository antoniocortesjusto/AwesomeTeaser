var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope, $navigate) {
  $scope.$navigate = $navigate;
  
});

controllers.controller('HomeCtrl', function($scope, Results, Friends){
  loadScript();
  $scope.search = {};
	$scope.search.results = {};
  $scope.search.friends = {};
	$scope.search.message = "";
  // $scope.inputCleared = false;

	 $scope.resetInput = function(){
   		$scope.search.message = "";
      $scope.showResults();
   		$scope.showClear = false;

   		console.log("reset input! showClear = false");
	 };

   $scope.showResults = function(){
      if($scope.search.message == "" || typeof $scope.search.message == 'undefined') {
        $scope.search.results = {};
        $scope.search.friends = {};
      } else {
        $scope.search.results = Results;
        $scope.search.friends = Friends;
      }
   };


  	
});

controllers.controller('FriendsCtrl', function($scope, Friends){
	$scope.friends = Friends;

});


controllers.controller('ProfileCtrl', function($scope, User){
	$scope.user = User;

});

controllers.controller('TripsCtrl', function($scope, Trips){
	$scope.trips = Trips;

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
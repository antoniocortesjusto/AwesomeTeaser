var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function($scope, $route) {
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
  $scope.$location = $location;

  
});

controllers.controller('HomeCtrl', function($scope, $route, MailChimp){
	

  $scope.User ={email: '', group: ''};
  	var handlePingSuccess = function(data, status){
  		console.log("ChimpPing Post success ==> " + "data.msg: " + data.msg + " status: " + status);
      	$scope.chimpPing = data.msg;
  	};

  	var handlePingError = function(data, status){
  		console.log("ChimpPing Post error ==> " + "data: " + data.name + " status: " + status);
      	$scope.chimpPing = data.name;
  	};

    var handleSubscribeSuccess = function(data, status){
      console.log("MailChimp.subscribe() Post success ==> " + "data.groups: " + data + " status: " + status);
        $scope.subscriptionResult = data;
    };

    var handleSubscribeError = function(data, status){
      console.log("MailChimp.subscribe() Post error ==> " + "data: " + data.name + " status: " + status);
        $scope.subscriptionResult = data.name;
    };


    $scope.subscribe = function(){

      if($scope.subscribeForm.$valid){
            
            console.log("Subscribing email: " + $scope.User.email + "group: " + $scope.User.group);
            MailChimp.subscribe($scope.User.email, $scope.User.group).success(handleSubscribeSuccess).error(handleSubscribeError);
          }
      else{
        $scope.subscriptionResult = "Error Form not valid!";
      }

    };


    function loadCarrousel(){
      var carousel = $('.carousel');
      carousel.carousel({
                   interval: 5000,
                      cycle: true
             });
             console.log("Carousel script");
      carousel.carousel().next();
    }
    
    loadCarrousel();
  	
});

controllers.controller('RegisterCtrl', function($scope, $route, $routeParams){
	
	$scope.params = {
		groupId : $routeParams.groupId
	};
	

});


controllers.controller('TeamCtrl', function($scope, $route){
  


});

controllers.controller('PitchCtrl', function($scope, $route){
  


});

controllers.controller('DemoCtrl', function($scope, $route){
  


});




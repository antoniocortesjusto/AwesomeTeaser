var controllers = angular.module('controllers', []);



/*Main Controller ofr global params*/
controllers.controller('MainCtrl', function($scope, $route) {
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
  $scope.$location = $location;

  
});


/*Controller for regitering at hompage*/
controllers.controller('HomeCtrl', function($scope, $route, MailChimp){
	
  $scope.Subscription ={};
  $scope.Subscription.subscriptionDone = false;
  $scope.tumblrURL = "";

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
        $scope.Subscription.subscriptionResult = true;
        $scope.Subscription.subscriptionDone = true;
        tumblrInitialize();
        console.log("subscriptionDone: " + $scope.Subscription.subscriptionDone + " subscriptionResult: " + $scope.Subscription.subscriptionResult)
    };

    var handleSubscribeError = function(data, status){
      console.log("MailChimp.subscribe() Post error ==> " + "data: " + data.name + " status: " + status);
        $scope.Subscription.subscriptionResult = false;
        $scope.Subscription.subscriptionDone = true;
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

    $scope.facebookShare = function(){
      console.log("FAcebookshare");
      window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('http://awesome.do//#register/' + $scope.User.group), 'facebook-share-dialog', 'width=626,height=436'); 
    return false;
    };

    function tumblrInitialize(){
      var tumblr_link_url = "http://awesome.do/#/register/" + User.group;
      var tumblr_link_name = "I just registered to Awesome. Join me!";
      var tumblr_link_description = "The more we are the sooner we will get access";
  
      $scope.tumblrURL = "http://www.tumblr.com/share/link?url=" + encodeURIComponent(tumblr_link_url) + "&name=" + encodeURIComponent(tumblr_link_name) + "&description=" + encodeURIComponent(tumblr_link_description);
    }

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


/*Controller to register via URL routing*/

controllers.controller('RegisterCtrl', function($scope, $route, $routeParams, MailChimp){
	
	params = {
		groupId : $routeParams.groupId
	};
	
  $scope.Subscription ={};
  $scope.Subscription.subscriptionDone = false;

  $scope.User ={email: '', group: params.groupId};
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
        $scope.Subscription.subscriptionResult = true;
        $scope.Subscription.subscriptionDone = true;
        console.log("subscriptionDone: " + $scope.Subscription.subscriptionDone + " subscriptionResult: " + $scope.Subscription.subscriptionResult)
    };

    var handleSubscribeError = function(data, status){
      console.log("MailChimp.subscribe() Post error ==> " + "data: " + data.name + " status: " + status);
        $scope.Subscription.subscriptionResult = false;
        $scope.Subscription.subscriptionDone = true;
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


/*Team Controller*/
controllers.controller('TeamCtrl', function($scope, $route){
  


});


/*Pitch Controller*/
controllers.controller('PitchCtrl', function($scope, $route){
  


});


/* Demo page Controller*/
controllers.controller('DemoCtrl', function($scope, $route){
  


});


/* Thanks and share Controller*/
controllers.controller('ThanksCtrl', function($scope, $route){
  


});


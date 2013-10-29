var controllers = angular.module('controllers', []);



/*Main Controller ofr global params*/
controllers.controller('MainCtrl', function($scope, $route) {
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
  $scope.$location = $location;

  
});


/*Controller for registering at hompage and regitering with group routeParam*/
controllers.controller('HomeCtrl', function($scope, $route, $routeParams, MailChimp){
  
  $scope.Params ={};
  console.log("routeParams: " + $routeParams.groupId);
  console.log("typeof $routeParams.groupID == 'undefined'" + typeof $routeParams.groupId == 'undefined');
  if(!(typeof $routeParams.groupId == 'undefined')){
    $scope.User ={email: '', group: $routeParams.groupId};
    $scope.Params.invited = true;
  }
  else{
    $scope.User ={email: '', group: ''};
    $scope.Params.invited = false;
  }
  $scope.Subscription ={};
  $scope.Subscription.subscriptionDone = false;
  $scope.shareURLS = {twitterURL: "", facebookURL: "", googlePlusURL: "", tumblrURL: "", pinterestURL: ""};
  var shareURL = "http://awesome.do/#/register/";

  
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
        twitterInitialize();
        googlePlusInitialize();
        facebookInitialize();
        pinterestInitialize();
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

    function facebookInitialize(){
      $scope.shareURLS.facebookURL = "" + encodeURIComponent(shareURL + $scope.User.group);
    };

    function tumblrInitialize(){
      var tumblr_link_name = "I just registered to Awesome. Join me!";
      var tumblr_link_description = "The more we are the sooner we will get access";
  
      $scope.shareURLS.tumblrURL = "http://www.tumblr.com/share/link?url=" + encodeURIComponent(shareURL + $scope.User.group) + "&name=" + encodeURIComponent(tumblr_link_name) + "&description=" + encodeURIComponent(tumblr_link_description);
    }

    function twitterInitialize(){
      var text = "I just registered to Awesome. Join me! The more we are the sooner we will get access";
      var via = "AwesomeApp";
      $scope.shareURLS.twitterURL = "" + encodeURIComponent(shareURL + $scope.User.group) + "&text=" + encodeURIComponent(text) + "&via=AwesomeApp&hashtags=AwesomeRegistration&count=none";
      
    }

    function googlePlusInitialize(){
      $scope.shareURLS.googlePlusURL = "" + encodeURIComponent(shareURL + $scope.User.group);
    }

    function pinterestInitialize(){
      $scope.shareURLS.pinterestURL = "" + encodeURIComponent(shareURL + $scope.User.group);
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


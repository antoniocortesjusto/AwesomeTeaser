var Awesome =angular.module("AwesomeTeaser", ['filters', 'controllers', 'directives', 'services', 'ngRoute', 'ngAnimate']);



Awesome.config(function($routeProvider, $sceDelegateProvider) {
  
  $routeProvider.when('/register/:groupId', {
    templateUrl: 'html/group.html',
    controller: 'RegisterCtrl'
    
  });
  
  $routeProvider.when('/', {
    templateUrl: 'html/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.when('/demo', {
    templateUrl: 'html/demo.html',
    controller: 'DemoCtrl'
  });

  
  $routeProvider.otherwise({
    redirectTo: "/"
  });

  $sceDelegateProvider.resourceUrlWhitelist(['self','https://us7.api.mailchimp.com/2.0','http://localhost']);




});

var Awesome =angular.module("AwesomeTeaser", ['filters', 'controllers', 'directives', 'services', 'ngRoute', 'ngAnimate']);



Awesome.config(function($routeProvider) {
  
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

});

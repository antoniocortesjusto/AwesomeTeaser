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

   $routeProvider.when('/team', {
    templateUrl: 'html/team.html',
    controller: 'TeamCtrl'
  });

   $routeProvider.when('/pitch', {
    templateUrl: 'html/pitch.html',
    controller: 'PithCtrl'
  });

   $routeProvider.when('/thanks', {
    templateUrl: 'html/thanks.html',
    controller: 'ThanksCtrl'
  });

   $routeProvider.when('/elevator', {
    redirectTo: '/pitch'
  });

  
  $routeProvider.otherwise({
    redirectTo: "/"
  });

  $sceDelegateProvider.resourceUrlWhitelist(['self','https://us7.api.mailchimp.com/2.0']);




});

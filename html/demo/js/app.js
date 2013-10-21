var Awesome =angular.module("Awesome", ['filters', 'controllers', 'directives', 'services', 'mobile-navigate']);

Awesome.config(function($routeProvider) {
  $routeProvider.when("/trips", {
    templateUrl: "html/trips.html"
  }).when("/friends", {
    templateUrl: "html/friends.html"
  }).when("/profile", {
    templateUrl: "html/profile.html"
  }).when("/", {
    templateUrl: "html/home.html"
  }).otherwise({
    redirectTo: "/"
  });
})
.run(function($route, $http, $templateCache) {
  angular.forEach($route.routes, function(r) {
    if (r.templateUrl) { 
      $http.get(r.templateUrl, {cache: $templateCache});
    }
  });
});



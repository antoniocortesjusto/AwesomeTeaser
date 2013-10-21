angular.module('Awesome', ['mobile-navigate'])
.config(function($routeProvider) {
  $routeProvider.when("/trips", {
    templateUrl: "html/trips.html"
  }).when("/friends", {
    templateUrl: "html/friends.html",
    transition: "modal" //this is overwritten by the go() in home.html
  }).when("/profile", {
    templateUrl: "html/profile.html",
    transition: "modal"
  }).when("/monkey", {
    templateUrl: "html/monkey.html"
  }).when("/backwards", {
    templateUrl: "html/backwards.html",
    reverse: true
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

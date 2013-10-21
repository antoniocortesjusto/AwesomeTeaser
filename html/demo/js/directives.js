var directives = angular.module('directives', []);


directives.directive('ngTap', function() {
  var isTouchDevice = !!("ontouchstart" in window);
  return function(scope, elm, attrs) {
    if (isTouchDevice) {
      var tapping = false;
      elm.bind('touchstart', function() { tapping = true; });
      elm.bind('touchmove', function() { tapping = false; });
      elm.bind('touchend', function() { 
        tapping && scope.$apply(attrs.ngTap);
      });
    } else {
      elm.bind('click', function() {
        scope.$apply(attrs.ngTap);
      });
    }
  };
});


directives.directive('typeahead', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
     restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
     template: '<div>' +
                  '<button ng-tap="showSearch = !showSearch" ng-hide="showSearch" id="btn-awesome" type="button" class= "btn-awesome" >' +
                    '<img class="home-awesome-icon" src="img/awesome_icon.png">'+
                  '</button>' +
                  '<div id ="search" ng-show="showSearch" class="container home-header">' +
                    '<form class="form-inline form1" role="form">' +
                      '<div class="form-group container">' +
                        '<button ng-click="showSearch = !showSearch" id="btn-awesome" type="button" class= "btn-awesome-header" >' +
                          '<img class="home-awesome-icon" src="img/awesome_icon.png">' +
                        '</button>' +
                        '<div id="search" class= "container">' +
                          '<input ng-focus="focused" class="searchInput input-lg form-control" type="text" placeholder="Search places or people" ng-model="search.message">' +
                          '<i class="icon-clear clear-btn" ng-click="resetInput()" ng-show="showClear">' + '</i>' +
                        '</div>' +                        
                      '</div>' +
                    '</form>' +
                  '</div> ' +
                  '<div id="menu" class= "container home-header-menu" ng-show="showSearch" ng-transclude>' +
                  '</div>' +
                '</div>', 
   
     replace: true,
     transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    

    link: function($scope, element, iAttrs, controller) {

      var $input = element.find('input');
      var $i = element.find('i');
      $scope.focused = false;
      $scope.showClear = false;


      $input.bind('focus', function() {
          $scope.$apply(function() { console.log("focused = true");$scope.focused = true; });
      });

      $input.bind('blur', function() {
          $scope.$apply(function() { console.log("focused = false");$scope.focused = false; });
      });

      $input.bind('keydown', function() {
          $scope.$apply(function() { console.log("showClear = false");$scope.showClear = false; });
      });

      $input.bind('keyup', function() {
          $scope.$apply(function() {console.log("showClear = true");
                                        $scope.showClear = true; });
      });

      $i.bind('click', function() {
          $input.trigger("focus");
          console.log("Input focused!!!");
      });
      
    }
  };
});

/*
<div class="row">
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
    </div><!-- /input-group -->
  </div>
</div>
*/
/*
'<div id="search" class= "container">' +
  '<input ng-focus="focused" class="searchInput input-lg form-control" type="text" placeholder="Search places or people" ng-model="search.message">' +
  '<i class="icon-clear clear-btn" ng-click="resetInput()" ng-show="showClear">' + '</i>' +
'</div>' + 
*/
/*
'<div class="row">' +
  '<div class="col-lg-6">' +
    '<div class="input-group">' +
      '<input ng-focus="focused" class="searchInput input-lg form-control" type="text" placeholder="Search places or people" ng-model="search.message">' +
      '<span class="input-group-btn">' +
        '<i class="icon-clear clear-btn" ng-click="resetInput()" ng-show="showClear">' + '</i>' +
      '</span>' +
    '</div>' +
  '</div>' +
'</div>' +
*/
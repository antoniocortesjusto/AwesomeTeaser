var directives = angular.module('directives', []);

directives.directive("unique", function(MailChimp) {
  return {
  	restrict: "A",
  	require: "ngModel",
    link: function($scope, element, attrs, ctrl) {
    	

		element.bind("blur",function(){
      console.log("scope.User.email: " + $scope.User.email);
      
      
      if($scope.User.email==" " || typeof $scope.User.email==='undefined' ){

        ctrl.$setValidity('required', false);
        var father = element.parent();
        father.removeClass("has-success");
        father.addClass("has-error");
        
      }
      else {
        var emailString=$scope.User.email.toString()
        console.log("emailString.length: " + emailString.length);
        if(emailString.length==0){
          ctrl.$setValidity('required', false);
          $scope.subscribeForm.email.$dirty = true;
          var father = element.parent();
          father.removeClass("has-success");
          father.addClass("has-error");
        }
        else{
          MailChimp.checkEmail($scope.User.email).success(handleSuccess).error(handleError);
        }
      }
    });



		function handleSuccess(data, status){
          console.log(JSON.stringify(data));
         	if(data.success_count == 0){
         		ctrl.$setValidity('unique', true);
            var father = element.parent();
            father.removeClass("has-error");
            father.addClass("has-success");
         	}
         	else{
         		ctrl.$setValidity('unique', false);
            var father = element.parent();
            father.removeClass("has-success");
            father.addClass("has-error");

         	}
		}


		function handleError(data, status){
	        ctrl.$setValidity('unique', false);
		}
	}	
  };
});


directives.directive("showerrorblur", function(MailChimp) {
  return {
  	restrict: "A",
  	require: "ngModel",
    link: function($scope, element, attrs, ctrl) {
      
      if (attrs.name == 'group')
      {
        $scope.focused = false;
        element.bind("blur",function(){
          console.log("$scope.subscribeForm.group.$valid: " + $scope.subscribeForm.group.$valid);
          if($scope.subscribeForm.group.$valid){
            var father = element.parent();
            father.removeClass("has-error");
            father.addClass("has-success");
          }
          else{
            var father = element.parent();
            father.removeClass("has-success");
            father.addClass("has-error");
          }
          $scope.$apply(function() {ctrl.$focused = false;});
          
        });

      }

      if(attrs.name == 'email'){

        $scope.focused = false;
        element.bind("blur",function(){
          console.log("$scope.subscribeForm.email.$valid: " + $scope.subscribeForm.email.$valid);
          if($scope.subscribeForm.email.$valid){
            var father = element.parent();
            father.removeClass("has-error");
            father.addClass("has-success");
          }
          else{
            var father = element.parent();
            father.removeClass("has-success");
            father.addClass("has-error");
          }
          $scope.$apply(function() {ctrl.$focused = false;});
        });


      }

      element.bind("focus",function(){
          $scope.$apply(function() {ctrl.$focused = true;});
      });
	 }	
  };
});



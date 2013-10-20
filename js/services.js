var services = angular.module('services', []);



services.factory('MailChimp', function($http){
  
  var url = 'http://awesome-teaser-server.nodejitsu.com';
 
  

  return{

    ping : function(){
      var apiMethod = 'ping';
      var data = {};
      return $http.post(url + apiMethod, data);   
    },

    subscribe : function(email, groupName){

      if(groupName == "" || !groupName ){
        groupName = "noGroup";
        console.log("groupName :" + groupName);
      }
      var apiMethod = '/subscribe';
      var data = { email: email, groupname: groupName};
        

      return $http.post(url + apiMethod, data);   
    },

    checkEmail : function(email){
      var apiMethod = '/email';
      var data = {email: email};

      return $http.post(url + apiMethod, data);   
    }
    

  };
  
});

  
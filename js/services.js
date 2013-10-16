var services = angular.module('services', []);



services.factory('MailChimp', function($http){
  
  var url = 'https://us7.api.mailchimp.com/2.0';
  var key = 'b129b31bdc33e77c3c2a9d1d5979c162-us7';
  var listId = '95c1bab1e9';
  var listName = 'AwesomeTeaser';
  var groupingId ='0'
  

  return{

    ping : function(){
      var apiMethod = '/helper/ping';
      var data = {apikey: key};
      return $http.post(url + apiMethod, data);   
    },

    getGroups : function(){
      var apiMethod = '/lists/interest-groupings';
      
      var data = {
        apikey: key,
        id: listId,
        counts: true 
      };

      return $http.post(url + apiMethod, data);   
    },


    addGroup : function(groupName){
      var apiMethod = '/lists/interest-group-add';
      var data = {
        apikey: key,
        id: listId,
        group_name: groupName 
      };

      return $http.post(url + apiMethod, data);   
    },

    subscribe : function(email, groupName){
      var apiMethod = '/lists/subscribe';
      var data = {
        apikey: key,
        id: listId,
        email: {email: email},
        merge_vars: {groupings: [{id: groupingId, groups:[groupName]}]},
        double_optin: true 
      };

      return $http.post(url + apiMethod, data);   
    }
    

  };
  
});

  
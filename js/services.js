var services = angular.module('services', []);


services.factory('Friends', function(){
	var Friends = [
  					{	img: "foto", name: "Toño"},
  					{	img: "foto", name: "Pedro"},
  					{	img: "foto", name: "Juan"},
  					{	img: "foto", name: "Miguel"},
  					{	img: "foto", name: "Alvaro"},
  					{	img: "foto", name: "Pablo"},
  					{	img: "foto", name: "Ernesto"},
  					{	img: "foto", name: "Rodrigo"},
  					{	img: "foto", name: "Manuel"},
  					{	img: "foto", name: "Juan Manuel"},
  					{	img: "foto", name: "Jose"},
  					{	img: "foto", name: "Antonio"},
  					{	img: "foto", name: "Jose Miguel"},
  					{	img: "foto", name: "Jose Antonio"},
  					{	img: "foto", name: "Andres"},
  					{	img: "foto", name: "Luis"}];
  
  	return Friends;
});

services.factory('User', function(){
  var User = {
          img: "glyphicon glyphicon-user user-photo",
          name: "Juan Soler",
          email: "juan.soler@awesome.do",
          telNumber: "636837248"};
  return User;
});


services.factory('MailChimp', function($http){
  
  var url = 'https://us7.api.mailchimp.com/2.0';
  var key = 'b129b31bdc33e77c3c2a9d1d5979c162-us7';
  var listId = '95c1bab1e9';
  var listName = 'AwesomeTeaser';
  

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
    }
    

  };
  
});

  
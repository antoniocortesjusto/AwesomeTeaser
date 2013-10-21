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
          img: "icon-user",
          name: "Juan Soler",
          email: "juan.soler@awesome.do",
          telNumber: "636837248"};

  return User;
});

services.factory('Results', function () {
  var Results = [
            { img: "foto", name: "Toño"},
            { img: "foto", name: "Pedro"},
            { img: "foto", name: "Juan"}];
            
  return Results;
});

services.factory('Search', function () {
  var Search = {message: ""};

  return Search;
});
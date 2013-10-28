var services = angular.module('services', []);


services.factory('Friends', function(){
	var Friends = [
  					{	img: "icon-user", name: "Toño"},
  					{	img: "icon-user", name: "Pedro"},
  					{	img: "icon-user", name: "Juan"},
  					{	img: "icon-user", name: "Miguel"},
  					{	img: "icon-user", name: "Alvaro"},
  					{	img: "icon-user", name: "Pablo"},
  					{	img: "icon-user", name: "Ernesto"},
  					{	img: "icon-user", name: "Rodrigo"},
  					{	img: "icon-user", name: "Manuel"},
  					{	img: "icon-user", name: "Juan Manuel"},
  					{	img: "icon-user", name: "Jose"},
  					{	img: "icon-user", name: "Antonio"},
  					{	img: "icon-user", name: "Jose Miguel"},
  					{	img: "icon-user", name: "Jose Antonio"},
  					{	img: "icon-user", name: "Andres"},
  					{	img: "icon-user", name: "Luis"}];
  
  	return Friends;
});

services.factory('User', function(){
  var User = {
          img: "glyphicon glyphicon-user",
          name: "Juan Soler",
          email: "juan.soler@awesome.do",
          telNumber: "636837248"};

  return User;
});

services.factory('Results', function () {
  var Results = [
            { img: "icon-trip", name: "Madrid"},
            { img: "icon-trip", name: "Barcelona"},
            { img: "icon-trip", name: "Valencia"}];
            
  return Results;
});

services.factory('Trips', function(){
  var Trips = [
            { img: "glyphicon glyphicon-map-marker", name: "Toño's birthday"},
            { img: "glyphicon glyphicon-map-marker", name: "Pedro's homecoming celebration"},
            { img: "glyphicon glyphicon-map-marker", name: "New Year's Eve party"},
            { img: "glyphicon glyphicon-map-marker", name: "Miguel & Ana engagement party"},
            { img: "glyphicon glyphicon-map-marker", name: "Alvaro's shop opening celebration"},];
  
    return Trips;
});
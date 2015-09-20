'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp',['ngRoute','myApp.home'])

//Declared Route
.config(['$routeProvider', function($routeProvider){
	
	$routeProvider.otherwise({
		redirectTo: '/home'
	});

}]);
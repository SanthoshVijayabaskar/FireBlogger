'use strict'

angular.module('myApp.register',['ngRoute'])

//Declared ngRoute
.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/register',{
		templateUrl: 'register/register.html',
		controller: 'RegisterCtrl'
	});

}])

//Register controller
.controller('RegisterCtrl',[function(){

}]);
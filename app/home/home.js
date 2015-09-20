'use strict';

angular.module('myApp.home',['ngRoute','firebase'])

//Declared ngRoute
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home/home.html',
		controller:  'HomeCtrl'
	});
}])

//Home controller
.controller('HomeCtrl',['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin){

	var firebaseObj = new Firebase("https://firebloggerapp.firebaseio.com");
	var loginObj 	= $firebaseSimpleLogin(firebaseObj);

	$scope.user = {};
	$scope.SignIn = function(event){

		event.preventDefault();
		var username 	= $scope.user.email;
		var password 	= $scope.user.password;

		loginObj.$login('password',{
			email: username,
			password: password
		})
		.then(function(user){
			//Success callback
			console.log('Authentication Successful');
		}, function(error){
			//Failure callback
			console.log('Authentication Failure');
		});
	}

}]);
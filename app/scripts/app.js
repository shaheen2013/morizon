'use strict';

/**
 * @ngdoc overview
 * @name morizonApp
 * @description
 * # morizonApp
 *
 * Main module of the application.
 */
var app = angular.module('morizonApp', [
    'ngCookies',
    'ngRoute'
]);

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'DashboardCtrl'
		})
		.when('/details', {
			templateUrl: 'views/details.html',
			controller: 'DetailsCtrl'
		})
		.otherwise({
			redirectTo: '/details'
		});

});

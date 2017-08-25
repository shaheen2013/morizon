'use strict';

angular.module('morizonApp').controller('DashboardCtrl', function ($scope, $http, APIService) {

	//$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	$http.defaults.headers.common['Content-Type'] = 'application/json';
	$http.get("http://94.23.12.200:8181/api/v1/getScraperLogs?siteAlias=morizon&mode=last")
    .then(function(response) {
    	console.log('response.data');
        console.log(response.data);
        //$scope.content = response.data;
    }, function(response) {
        console.log('Not Worked ' + response);
        //$scope.content = "Something went wrong";
    });


	
    
});
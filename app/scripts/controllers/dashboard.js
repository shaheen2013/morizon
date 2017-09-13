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

    $scope.pushData  = {};
    var socket = io.connect('http://scraperhanlder.herokuapp.com');
    socket.on('pushdata', function (data) {
        $scope.pushData = data;
        $scope.$apply();
        console.log(data);
        //socket.emit('my other event', { my: 'data' });
    });
    $scope.startService = function () {
        var url = "http://94.23.12.200:8181/api/v1/startScrapers";

        var data = [
            {"siteAlias" : "morizon"}
        ];

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };
        $http.post(url, data, config)
            .then(function(response) {
                console.log(response.status);
                console.log("data---", response.data);
                alert(response.data);
                //$scope.content = response.data;
            }, function(response) {
                console.log('Not Worked ' + response);
                //$scope.content = "Something went wrong";
            });

    };$scope.stopService = function () {
        var url = "http://94.23.12.200:8181/api/v1/stopScrapers";

        var data = [
            {"siteAlias" : "morizon"}
        ];

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };
        $http.post(url, data, config)
            .then(function(response) {
                console.log(response.status);
                console.log("data---", response.data);
                alert(response.data);
                //$scope.content = response.data;
            }, function(response) {
                console.log('Not Worked ' + response);
                //$scope.content = "Something went wrong";
            });

    };
    $scope.fetchGeneralStatus = function () {

        var url = "http://94.23.12.200:8181/api/v1/getGeneralStatus";
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        $http.get(url)
            .then(function (response) {
                    $scope.allGeneralStatus = response.data;

                console.log("allGeneralStatus---", $scope.allGeneralStatus);
            }, function (response) {
                console.log('Not Worked ' + response);
                //$scope.content = "Something went wrong";
            });
    };
    $scope.fetchAllRunningStatus = function () {

        var url = "http://94.23.12.200:8181/api/v1/getRunningStatus";
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        $http.get(url)
            .then(function (response) {
                    $scope.allRunningStatus = response.data;

                console.log("allGeneralStatus---", $scope.allRunningStatus);
            }, function (response) {
                console.log('Not Worked ' + response);
                //$scope.content = "Something went wrong";
            });
    };
    $scope.fetchGeneralStatus();
    $scope.fetchAllRunningStatus();
});
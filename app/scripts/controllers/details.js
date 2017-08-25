'use strict';

angular.module('morizonApp').controller('DetailsCtrl', function ($scope, $http) {


	//$scope.fetchDetailsData = function() {

		var url = "http://94.23.12.200:8181/api/v1/fetchDetailsData";

		var data = {
            siteAlias: "morizon",
            page: 1,
            filterQuery: ""
        };

        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };


		$http.post(url, data, config)
	    .then(function(response) {
	    	console.log(response.status);
	        console.log(response.data);
	        //$scope.content = response.data;
	    }, function(response) {
	        console.log('Not Worked ' + response);
	        //$scope.content = "Something went wrong";
	    });
        
    //};

	
    
});
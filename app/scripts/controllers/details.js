'use strict';

angular.module('morizonApp').controller('DetailsCtrl', function ($scope, $http, APIService, $uibModal, $log, $document, $routeParams) {

    

	$scope.fetchDetailsData = function(siteId) {

		var url = "http://94.23.12.200:8181/api/v1/fetchDetailsData";

		var data = {
            siteAlias: siteId,
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
	        console.log("data---", response.data);
	        //$scope.content = response.data;
	    }, function(response) {
	        console.log('Not Worked ' + response);
	        //$scope.content = "Something went wrong";
	    });
        
    };
    $scope.fetchDetailsData($routeParams.siteId);
$scope.openDetailsOptionModal = function (size, parentSelector) {
    var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/list-details-option.html',
        controller: 'ListDetailsOptionCtrl',
        controllerAs: '$ctrl',

        size: size,
        appendTo: parentElem,
        resolve: {
            items: function () {
                return [1,2,3];
            }
        }
    });

    modalInstance.result.then(function (selectedItem) {
        console.log(selectedItem);

    }, function () {
        $log.info('Modal dismissed at: ' + new Date());
    });
};
	
    
});
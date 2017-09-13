'use strict';

angular.module('morizonApp').controller('DetailsCtrl', function ($scope, $http, APIService, $uibModal, $log, $document, $routeParams) {


    $scope.fetchDetailsData = function (siteId) {

        var url = "http://94.23.12.200:8181/api/v1/fetchDetailsData";

        var data = {
            siteAlias: siteId,
            page: 1,
            filterQuery: ""
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        $scope.columnList = [];
        $scope.detailsDataColumnDefs = [{field: 'addressFull'}, {field: 'agencyFees'}];

        $http.post(url, data, config)
            .then(function (response) {
                console.log(response.status);
                if (response.data[0]) {
                    $scope.columnList = $scope.getColumnList(response.data[0])
                }
                $scope.detailsDataColumnDefs = $scope.columnList.slice(0, 13);
                console.log("data---", $scope.columnList);
                $scope.detailsDataList = response.data;
            }, function (response) {
                console.log('Not Worked ' , response);
                //$scope.content = "Something went wrong";
            });

    };
    $scope.fetchTempIDs = function (siteId) {

        var url = "http://94.23.12.200:8181/api/v1/fetchTempIDs";

        var data = {
            siteAlias: siteId,
            page: 1,
            filterQuery: ""
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        //$scope.columnList = [];
        //$scope.detailsDataColumnDefs = [{field: 'addressFull'}, {field: 'agencyFees'}];

        $http.post(url, data, config)
            .then(function (response) {
                console.log("fetchTempIDs", response.data);
                //if (response.data[0]) {
                //    $scope.columnList = $scope.getColumnList(response.data[0])
                //}
                //$scope.detailsDataColumnDefs = $scope.columnList.slice(0, 13);
                //console.log("data---", $scope.columnList);
                $scope.tempIDsList = response.data;
            }, function (response) {
                console.log('Not Worked ' , response);
                //$scope.content = "Something went wrong";
            });

    };

    $scope.fetchGeneralStatus = function (siteId) {

        var url = "http://94.23.12.200:8181/api/v1/getGeneralStatus";

        //var data = {
        //    siteAlias: siteId,
        //    page: 1,
        //    filterQuery: ""
        //};

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.get(url)
            .then(function (response) {
                if (response && response.data && response.data[0]) {
                    $scope.generalStatus = response.data[0];
                }
                console.log("generalStatus---", $scope.generalStatus);
            }, function (response) {
                console.log('Not Worked ' + response);
                //$scope.content = "Something went wrong";
            });
    };
    $scope.fetchRunningStatus = function (siteId) {

        var url = "http://94.23.12.200:8181/api/v1/getRunningStatus";

        //var data = {
        //    siteAlias: siteId,
        //    page: 1,
        //    filterQuery: ""
        //};

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.get(url)
            .then(function (response) {
                if (response && response.data && response.data[0]) {
                    $scope.runningStatus = response.data[0];
                }
                console.log("runningStatus---", $scope.runningStatus);
            }, function (response) {
                console.log('Not Worked ' + response);
                //$scope.content = "Something went wrong";
            });
    };


    $scope.getColumnList = function (data) {
        var retObj = [];
        for (var key in data) {

            retObj.push({
                field: key
            })
        }
        return retObj;
    };
    $scope.init13Field = function () {

    }
    $scope.fetchDetailsData($routeParams.siteId);
    $scope.fetchGeneralStatus($routeParams.siteId);
    $scope.fetchRunningStatus($routeParams.siteId);
    $scope.fetchTempIDs($routeParams.siteId);
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
                    return $scope.columnList;
                },
                selected: function () {
                    return $scope.detailsDataColumnDefs
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.detailsDataColumnDefs = selectedItem;

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


});
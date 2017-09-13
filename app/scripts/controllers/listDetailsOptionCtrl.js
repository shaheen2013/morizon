'use strict';

angular.module('morizonApp').controller('ListDetailsOptionCtrl', function ($uibModalInstance, items, selected) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $ctrl.isSelected = function (value) {
        function isFound(element) {
            return element.field == value;
        }
        if(selected.findIndex(isFound) >= 0 )
            return true;
        else
            return false;
    };
    $ctrl.initSelected= function (data) {
        var retData = {}
        data.forEach(function (row) {
            retData[row.field] = true;
        })
        return retData;
    };
    $ctrl.newSelect = $ctrl.initSelected(selected);
    $ctrl.retrieveSelected= function (data) {
        var retData = [];
        for(var key in data){
            if(data[key])
                retData.push({ field: key })
        }
        return retData;
    };
    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.retrieveSelected($ctrl.newSelect));
    };


});
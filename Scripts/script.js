///<reference path="angular.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { firstName: "Rajasekhar", lastName: "Venkata", gender: "male", address: "8005 Waterford Lakes Dr" },
            { firstName: "Rajasekhar", lastName: "Venkata", gender: "male", address: "8005 Waterford Lakes Dr" },
            { firstName: "Rajasekhar", lastName: "Venkata", gender: "male", address: "8005 Waterford Lakes Dr" }
        ];
        $scope.employees = employees;   
           

});
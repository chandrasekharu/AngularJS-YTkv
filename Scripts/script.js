///<reference path="angular.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { name: "RamaChandra", dateOfBirth: new Date("November 23, 1980"), gender: "male", salary: 65000.78 },
            { name: "Jai Kumar", dateOfBirth: new Date("November 23, 1980"), gender: "male", salary: 65000.78 },
            { name: "Chandra", dateOfBirth: new Date("November 23, 1980"), gender: "male", salary: 65000.78 },
            { name: "Karthik", dateOfBirth: new Date("November 23, 1980"), gender: "male", salary: 65000.78 },
            { name: "Sama", dateOfBirth: new Date("November 23, 1980"), gender: "male", salary: 65000.78 },
        ];
        $scope.employees = employees;
        $scope.rowLimit = 3;


});
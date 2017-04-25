///<reference path="angular.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { name: "RamaChandra", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.78 },
            { name: "Jai Kumar", dateOfBirth: new Date("November 23, 1999"), gender: "Female", salary: 36000.78 },
            { name: "Chandra", dateOfBirth: new Date("November 23, 2000"), gender: "Female", salary: 75000.78 },
            { name: "Karthik", dateOfBirth: new Date("November 23, 2014"), gender: "male", salary: 89000.78 },
            { name: "Sama", dateOfBirth: new Date("November 23, 1972"), gender: "Male", salary: 23000.78 },
        ];
        $scope.employees = employees;
        $scope.sortColumn = "name";


});
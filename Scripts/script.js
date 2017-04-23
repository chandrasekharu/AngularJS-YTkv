///<reference path="angular.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var countries = [
            {
                name: "Rajasekhar",
                cities: [
                    { name: "Birmingham" },
                    { name: "Birmingham" },
                    { name: "Birmingham" }
                ]
            },
            { name: "Rajasekhar", cities: [{ name: "Birmingham" }, { name: "Birmingham" }, { name: "Birmingham" }] },
            { name: "Rajasekhar", cities: [{ name: "Birmingham" }, { name: "Birmingham" }, { name: "Birmingham" }] }
        ];
        $scope.countries = countries;   
           

});
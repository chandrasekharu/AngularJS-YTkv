///<reference path="angular.js"/>

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var products = [
            { orderid:'12', name:"Mobile", price:"35", category:"electronics"  },
            { orderid:'13', name: "Mobile", price: "35", category: "electronics" },
            { orderid: '14', name: "Mobile", price: "35", category: "electronics" }
        ];
        $scope.products = products;
        
});
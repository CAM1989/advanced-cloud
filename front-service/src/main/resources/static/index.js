angular.module('app', []).controller('indexController', function ($scope, $http) {
    const contextPath = 'http://localhost:62281/product-service/';

    $scope.loadProducts = function () {
        $http({
            url: contextPath + 'api/v1/products',
            method: 'GET'
        }).then(function (response) {
            $scope.products = response.data;
        });
    }

    $scope.loadProducts();
});
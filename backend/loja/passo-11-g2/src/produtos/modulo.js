'use strict';

var config = require('../config');

module.exports = angular.module('moduloProdutos', [])
    .controller('ProdutoController', function ($rootScope, $scope, $http, $routeParams) {
        $rootScope.pageTitle = 'Loja - Produto';
        $http.get(config.API_ROOT + 'produtos/find.php?id=' + $routeParams.id)
            .then(function (result) {
                $scope.produto = result.data;
                if (!$scope.produto.imagem) {
                    $scope.produto.imagem = 'http://placehold.it/400x400';
                }
                $http.get(config.API_ROOT + 'produtos/ping.php?id=' + $routeParams.id);

            });
    });

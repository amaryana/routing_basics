angular.module('routing', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/homeTmpl.html'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/settings/settingsTmpl.html'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: 'app/products/productsTmpl.html',
            controller: 'productsCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});

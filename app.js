

(() => {

'use strict';

    angular
        .module('app', ['ui.router', 'ngMaterial', 'mdDataTable', 'oc.lazyLoad'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];
    run.$inject = [];

    function config($stateProvider, $urlRouterProvider, $mdThemingProvider, $ocLazyLoad){

        $mdThemingProvider
            .theme('default')
            .primaryPalette('indigo')
            .accentPalette('indigo')
            .backgroundPalette('grey')
            .warnPalette('red');

        $urlRouterProvider.otherwise('/app');

        $stateProvider

            .state('app', {
                url: '/app',
                templateUrl : 'views/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    loadDependecies: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'assets/css/home.css',
                            'assets/js/home.js',
                            'controllers/home.controller.js'
                        ]);
                    }]
                }
            })

    }

    function run(){

    }

})()
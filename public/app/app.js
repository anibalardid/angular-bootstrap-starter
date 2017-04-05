(function() {
    "use strict";

    /**
    * @ngdoc overview
    * @name webapp
    * @description
    * # webapp
    *
    * Main module of the application.
    */

    // Modules
    angular.module('webapp', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'smart-table',
        'ngResource',
        'ngStorage',
        'toaster',
        'pascalprecht.translate',
        'angular-loading-bar',
        'core'
    ]);

    // Config Constants
    angular.module('webapp').constant("Config", APP_CONFIG);

    // Config translate
    angular.module('webapp').config(['$translateProvider', 'Config', function($translateProvider, Config){
        // translate configuration
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'resources/i18n/',
                suffix: '.json'
             })
            .registerAvailableLanguageKeys(['en', 'es'], {
               'en-*': 'en',
               'es-*': 'es'
             })
           .determinePreferredLanguage(Config.languaje)
           .preferredLanguage('es')
           .useSanitizeValueStrategy(null);

    }]);

    // Config Routes
    angular.module('webapp').config(
        ['$stateProvider', '$urlRouterProvider', 'Config', function($stateProvider, $urlRouterProvider, Config) {
        $stateProvider
            .state('app', {
                abstract: true,
                url:'/',
                views: {
                    '': {
                        templateUrl : 'app/core/views/layout.html',
                        controller  : 'IndexController'
                    },
                    'menu': {
                        templateUrl : 'app/core/views/menu.html'
                    }
                }
            })
            .state('app.home', {
                url:'home',
                views: {
                    'content': {
                        templateUrl : 'app/core/views/home.html'
                    }
                }
            })

        $urlRouterProvider.otherwise('/home');

    }]);

})();

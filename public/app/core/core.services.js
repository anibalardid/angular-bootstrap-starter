(function() {
    "use strict";

     /**
     * @ngdoc service
     * @name CoreService
     * @description
     * # CoreService
     * Diferentes Servicios Cross Modulos
     */
     angular.module('core').service('Notifications', ['$filter', 'toaster', function($filter, toaster){
         return {
             success: function(message) {
                 toaster.pop('success', null, $filter('translate')(message), true);
             },
             warning: function(message) {
                 toaster.pop('warning', $filter('translate')('Warning'), $filter('translate')(message), true);
             },
             error: function(message) {
                 toaster.pop('error', $filter('translate')('Error'), $filter('translate')(message), true);
             }
         };
     }]);

    /**
     * @ngdoc service
     * @name Logs
     * @description
     * # Logs
     * Console Logs
     */
    angular.module('core').service('CoreLogs', ['Config', '$filter', function(Config, $filter) {
        return {
            log: function(msg, data) {
                if (Config.logsEnabled) {
                    var today = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
                    console.log('DEBUG: ' + today + 'hs :: ' + msg + '', data);
                }
            },
            error: function(msg, data) {
                if (Config.logsEnabled) {
                    var today = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
                    console.error('ERROR: ' + today + 'hs :: ' + msg + '', data);
                }
            },
            warn: function(msg, data) {
                if (Config.logsEnabled) {
                    var today = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
                    console.warn('WARNING: ' + today + 'hs :: ' + msg + '', data);
                }
            }
        };
    }]);


})();

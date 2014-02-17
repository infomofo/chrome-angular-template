'use strict';

/**
 * Listens to the window's online status and sets a global variable based on if
 * the application has internet connectivity.
 */
angular.module('genericChromeApp')
  .run(function($window, $rootScope) {
      $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
});

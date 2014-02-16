'use strict';

angular.module('genericChromeApp')
  .controller('MainCtrl', function ($scope, slidenav) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


	$scope.closeSideNav = function(){
		slidenav.close();
	}

	$scope.toggleSideNav = function(){
		if (slidenav.isOpen()) {
			slidenav.close();
		} else {
			slidenav.open();
		}
	}
  });

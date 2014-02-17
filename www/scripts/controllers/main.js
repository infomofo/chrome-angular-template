'use strict';

angular.module('genericChromeApp')
  .controller('MainCtrl', function ($scope, slidenav) {
	$scope.screens = ['home', 'profile', 'settings', 'about', 'debug'];
	$scope.selectedScreen = $scope.screens[0];

	$scope.selectScreen = function(screen) {
		if (_.contains($scope.screens, screen)) {
			$scope.selectedScreen = screen;
			$scope.closeSideNav();
		} else {
			console.error("Invalid screen selection " + screen);
		}
	}

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

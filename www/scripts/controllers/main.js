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

	$scope.cards = [
		{
			'title': 'Card 1',
			'details': 'swipe right to dismiss this card'
		},	
		{
			'title': 'Card 2',
			'details': 'swipe right to dismiss this card'
		}
	];

	$scope.removeCard = function(index) {
		$scope.cards.splice(index,1);
	}

	$scope.setOffset = function (card, offset) {
		card.offset = offset;
	}
  });

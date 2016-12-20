angular.module("myApp").controller('RestaurantFormController', ['$scope', '$rootScope', 'RestaurantsService', function($scope, $rootScope, RestaurantsService) {

	$scope.newRestaurant = {
		dishes : []
	};
	$scope.newDish = {};

	$scope.createNewDish = function() {
		$scope.newRestaurant.dishes.push($scope.newDish);
		$scope.newDish = {};
	};

	$scope.createNewRestaurant = function() {
		RestaurantsService.restaurants.push($scope.newRestaurant);
		RestaurantsService.addNewRestaurant = false;
		$scope.newRestaurant = { 
			dishes : [] 
		};
	};

}]);
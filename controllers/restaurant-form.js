angular.module("myApp").controller('RestaurantFormController', ['$scope', '$rootScope', 'RestaurantsService', function($scope, $rootScope, RestaurantsService) {

	$scope.newDish = {};

	$scope.createNewDish = function() {
		console.log($scope.newDish);
		RestaurantsService.addNewRestaurant = false;
	};

}]);
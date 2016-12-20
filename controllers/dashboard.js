angular.module("myApp").controller('DashboardController', ['$scope', '$rootScope', 'RestaurantsService', 'RestaurantDetailService', function($scope, $rootScope, RestaurantsService, RestaurantDetailService) {

	$scope.restaurants = RestaurantsService.restaurants;
	$scope.filteredRestaurants = {};
	$scope.restaurantSearchTerm = '';
	$scope.addNewRestaurant = RestaurantsService.addNewRestaurant;

	$scope.$watch(function() {
		$scope.restaurants = RestaurantsService.restaurants;
		$scope.addNewRestaurant = RestaurantsService.addNewRestaurant;
	});

	$scope.showRestaurantInfo = function(restaurant) {
		if (restaurant !== $scope.selectedRestaurant) {
			RestaurantDetailService.restaurant = restaurant;
        	$scope.selectedRestaurant = restaurant;
		} else {
			RestaurantDetailService.restaurant = {};
        	$scope.selectedRestaurant = {};
		}  
    };

    $scope.updateSearchTerm = function(searchTerm) {
    	$scope.restaurantSearchTerm = searchTerm;
    };

    $scope.createNewRestaurant = function() {
    	RestaurantsService.addNewRestaurant = true;
    };

}]);
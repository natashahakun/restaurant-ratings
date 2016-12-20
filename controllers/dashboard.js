angular.module("myApp").controller('DashboardController', ['$scope', '$rootScope', 'RestaurantsService', 'RestaurantDetailService', function($scope, $rootScope, RestaurantsService, RestaurantDetailService) {

	$scope.restaurants = RestaurantsService.restaurants;
	$scope.restaurantSearch = '';

	$scope.showRestaurantInfo = function(restaurant) {
		if (restaurant !== $scope.selectedRestaurant) {
			RestaurantDetailService.restaurant = restaurant;
        	$scope.selectedRestaurant = restaurant;
		} else {
			RestaurantDetailService.restaurant = {};
        	$scope.selectedRestaurant = {};
		}  
    };

}]);
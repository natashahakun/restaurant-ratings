angular.module("myApp").controller('DashboardController', ['$scope', '$rootScope', 'RestaurantsService', 'RestaurantDetailService', function($scope, $rootScope, RestaurantsService, RestaurantDetailService) {

	$scope.restaurants = RestaurantsService.restaurants;

	$scope.showRestaurantInfo = function(restaurant) {
        RestaurantDetailService.restaurant = restaurant;
        $scope.selectedRestaurant = restaurant;
    };

}]);
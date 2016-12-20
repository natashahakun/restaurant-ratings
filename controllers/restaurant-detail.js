angular.module("myApp").controller('RestaurantDetailController', ['$scope', '$rootScope', 'RestaurantsService', 'RestaurantDetailService', function($scope, $rootScope, RestaurantsService, RestaurantDetailService) {

	$scope.$watch(function(){
	$scope.restaurant = RestaurantDetailService.restaurant;
	});

}]);
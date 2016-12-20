angular.module("myApp").controller('RestaurantDetailController', ['$scope', '$rootScope', 'RestaurantsService', 'RestaurantDetailService', function($scope, $rootScope, RestaurantsService, RestaurantDetailService) {

	$scope.$watch( function(){
		$scope.restaurant = RestaurantDetailService.restaurant;
	});

	$scope.setYesOrNo = function(trueOrFalse) {
		if (trueOrFalse === true) {
			return 'Yes';
		} else {
			return 'No';
		}
	};

}]);
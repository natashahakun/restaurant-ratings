angular.module('myApp').filter('restaurantFilter', ['$rootScope', function ($rootScope) {
    return function (restaurants, searchTerm) {
    	var filteredRestaurants = [];

    	if (searchTerm !== '') {
    		angular.forEach(restaurants, function(restaurant) {
    			if (restaurant.name.includes(searchTerm)) {
    				filteredRestaurants.push(restaurant);
    			}
    		});
    	}

    	return filteredRestaurants;
    };
}]);
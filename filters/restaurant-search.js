angular.module('myApp').filter('RestaurantSearch', [function() {
    return function (restaurants, searchTerm) {
    	var filteredRestaurants = [];

    	if (searchTerm === '') {
    		return restaurants;
    	} else {
    		angular.forEach(restaurants, function(restaurant) {
    			var restaurantName = restaurant.name.toLowerCase();
    			
    			if (restaurantName.includes(searchTerm.toLowerCase())) {
    				filteredRestaurants.push(restaurant);
    			}
    		});
    	}

    	return filteredRestaurants;
    };
}]);
angular.module('myApp').filter('Restaurant', [function() {
    return function (restaurants, searchTerm) {
    	var filteredRestaurants = [];

    	if (searchTerm !== '') {
    		angular.forEach(restaurants, function(restaurant) {
    			var restaurantName = restaurant.name.toLowerCase();
    			if (restaurantName.includes(searchTerm.toLowerCase())) {
    				filteredRestaurants.push(restaurant);
    			}
    		});
    	} else {
    		filteredRestaurants = restaurants;
    	}

    	return filteredRestaurants;
    };
}]);
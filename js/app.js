(function() {

	var myApp = angular.module('myApp', [
		'ui.router',
		'ngSanitize'
	]);

	myApp.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/dashboard");

		$stateProvider
		.state('dashboard', {
		    url: "/dashboard",
		    templateUrl: "views/dashboard.html"
		})
	}); 

}()); 

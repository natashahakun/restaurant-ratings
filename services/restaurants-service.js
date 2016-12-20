angular.module("myApp").factory('RestaurantsService', function($rootScope) {

	var service = {
		restaurants : [
			{
				name : "Monk's Cafe",
				types : [
					'Belgian',
					'Pub'
				],
				dishes : [
					{
						name : 'Seitan Cheese Steak',
						scale : 7,
						heavy : true,
						recommend : true,
						notes : 'Cheese steaks are not my go-to, but this was definitely good' 
					}
				]
				// drinks : [
				// 	{
				// 		name : '',
				// 		scale : 0,
				// 		recommend : false,
				// 		notes : ''
				// 	}
				// ],
				// ambiance : {
				// 	scale : 7,
				// 	decor : [
				// 		'Pub', 
				// 		'Belgian'
				// 	],
				// 	notes : 'Cozy and fun'
				// },
				// noise : {
				// 	level : 5,
				// 	notes : ''
				// },
				// service : {
				// 	scale : 7,
				// 	notes : 'Chill yet attentive'
				// }
			},
			{
				name : "JJ Thai Cuisine",
				types : [
					'Thai',
					'Asian Fusion'
				],
				dishes : [
					{
						name : 'Vegetable Spring Roll',
						scale : 7,
						heavy : false,
						recommend : true,
						notes : 'Small and great texture. Was reminded that I love sweet and sour sauce. Four rolls.'
					},
					{
						name : 'Pad Thai with Shrimp',
						scale : 8,
						heavy : true,
						recommend : true,
						notes : 'Noodles, sauce, and texture were great. Shrimp still had tails on, but were good'
					},
					{
						name : 'Grilled Seafood',
						scale : 8,
						heavy : false,
						recommend : true,
						notes : 'Shrimp, salmon, eggplant were so good. Sticky rices and sauces mmm.'
					}
				],
				// drinks : [
				// 	{
				// 		name : '',
				// 		scale : 0,
				// 		recommend : false,
				// 		notes : ''
				// 	}
				// ],
				// ambiance : {
				// 	scale : 8,
				// 	decor : [
				// 		'Asian'
				// 	],
				// 	notes : 'Intimate and cozy'
				// },
				// noise : {
				// 	level : 4,
				// 	notes : ''
				// },
				// service : {
				// 	scale : 9,
				// 	notes : 'Friendly and attentive. Drank my bodyweight in water because my cup kept filling up.'
				// }
			},
			{
				name : "Elixir Coffee Roasters",
				types : [
					'Coffee and Tea',
					'Cafe'
				],
				dishes : [
					{
						name : 'Almond Milk Latte',
						scale : 9,
						heavy : false,
						recommend : true,
						notes : 'How do they make this latte taste like a marshmallow?! Milk to espresso consistency on point.'
					}
				]
				// drinks : [
				// 	{
				// 		name : 'Almond Milk Latte',
				// 		scale : 9,
				// 		recommend : true,
				// 		notes : 'How do they make this latte taste like a marshmallow?! Milk to espresso consistency on point.'
				// 	}
				// ],
				// ambiance : {
				// 	scale : 8,
				// 	decor : [
				// 		'rustic', 
				// 		'industrial'
				// 	],
				// 	notes : 'Always packed!'
				// },
				// noise : {
				// 	level : 6,
				// 	notes : ''
				// },
				// service : {
				// 	scale : 7,
				// 	notes : 'Counter service.'
				// }
			},
			{
				name : "Plenty Cafe",
				types : [
					'Cafe',
					'Breakfast and Brunch'
				],
				dishes : [
					{
						name : 'Smoked Salmon Toast',
						scale : 7,
						heavy : false,
						recommend : true,
						notes : 'High St. Bread so good. A bit heavy on the dill creme.'
					},
					{
						name : 'Avocado Toast',
						scale : 7,
						heavy : false,
						recommend : true,
						notes : 'Lots of avocado and delicious with the grilled corn and pickled onion. Wanted a liiitle salt on there.'
					}
				]
				// drinks : [
				// 	{
				// 		name : '',
				// 		scale : 0,
				// 		recommend : false,
				// 		notes : ''
				// 	}
				// ],
				// ambiance : {
				// 	scale : 7,
				// 	decor : [
				// 		'Modern',
				// 		'Rustic'
				// 	],
				// 	notes : 'Lots of plants, clean lines, and windows. Wood seating looked great and was not incredibly comfortable.'
				// },
				// noise : {
				// 	level : 4,
				// 	notes : 'Went on a Sunday afternoon. Open space with not a lot to catch the sound could be a noise vortex at a busier time!'
				// },
				// service : {
				// 	scale : 9,
				// 	notes : 'Young lad did a great job!'
				// }
			},
			{
				name : "V Street",
				types : [
					'Vegan',
					'Vegetarian'
				],
				dishes : [
					{
						name : 'Dan Dan Noodles',
						scale : 9,
						heavy : true,
						recommend : true,
						notes : 'Delicious sauce'
					},
					{
						name : 'Korean Fried Tempeh Tacos',
						scale : 8,
						heavy : false,
						recommend : true,
						notes : 'Tempeh was great. Three small tacos - not ideal if very hungry... unless you saving room for the waffle!'
					},
					{
						name : 'Waffle',
						scale : 9,
						heavy : true,
						recommend : true,
						notes : 'YES.'
					},
					{
						name : 'Soft Serve Eggnog with Gingerbread pieces',
						scale : 4,
						heavy : false,
						recommend : false,
						notes : 'Great texture. Eggnog is not my jam. Probably would be great in another flavor, ideally salted caramel.'
					}
				]
				// drinks : [
				// 	{
				// 		name : '',
				// 		scale : 0,
				// 		recommend : false,
				// 		notes : ''
				// 	}
				// ],
				// ambiance : {
				// 	scale : 8,
				// 	decor : [
				// 		'Eclectic'
				// 	],
				// 	notes : 'Cozy and warm on a Tuesday night.'
				// },
				// noise : {
				// 	level : 5,
				// 	notes : 'Thumbs up, but it was Tuesday.'
				// },
				// service : {
				// 	scale : 9,
				// 	notes : 'Great. I made a joke and he laughed. Broke the ice. NICE.'
				// }
			}
		]
	};
	
	return service;

});
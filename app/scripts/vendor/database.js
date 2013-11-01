define(['jquery','underscore','backbone'],
function ($, _, Backbone) {
	var GET = function(parameters) {
		$.GET("database/get.php", parameters, function(status) {
			return status;	
		});
	};
	
	var getAllDatabases = function() {
		console.log(this.GET({}));
	};
});
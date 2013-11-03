define(['jquery'], function ($) {
    
    'use strict';
    
    var database = {
        GET: function(parameters) {
            
            $.GET("database/get.php", parameters, function(status) {
                return status;	
            });
        },         
        getAllDatabases: function() {
            console.log(this.GET({}));
        }
    }
       
    return database;

});
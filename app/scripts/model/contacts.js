define([
  'underscore',
  'backbone',
], function(_, Backbone) {
    
    var ContactsModel = Backbone.Model.extend({
        url : '',
        defaults : {
            name: "NA",
            address: "NA",
            mail: "NA"
        },  
        initialize: function( options ) {},
    });
    
    return ContactsModel;

});
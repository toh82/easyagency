define([
  'underscore',
  'backbone',
], function(_, Backbone) {
    
    var ContactsModel = Backbone.Model.extend({
        url : '',
        defaults : {
            name: "Harry Potter",
            address: "Hogwards Street 11",
            mail: 'harry@hogwards.org'
        },  
        initialize: function( options ) {
            console.log('Model loaded', this)           
        },
    });
    
    return ContactsModel;

});
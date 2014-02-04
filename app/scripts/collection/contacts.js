define([
    'underscore',
    'backbone',
    'model/contacts'
], function(_, Backbone, ContactsModel){
    
    var ContactCollection = Backbone.Collection.extend({
        doreduce: false,
        view:  "all", // NOTE this is the couch view parameter !!!
        model: ContactsModel,
        initialize: function(options){
 
        }
    });
    
    return ContactCollection;
    
});
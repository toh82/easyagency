define([
    'underscore',
    'backbone',
    'model/contacts'
], function(_, Backbone, ContactsModel){
    
    var ContactCollection = Backbone.Collection.extend({
        model: ContactsModel
    });
    
    return ContactCollection;
    
});
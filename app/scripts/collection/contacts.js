define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'model/contacts'
], function(_, Backbone, ContactsModel){
    
    var ContactCollection = Backbone.Collection.extend({
        model: ContactsModel
    });
    
    return ContactCollection;
    
});
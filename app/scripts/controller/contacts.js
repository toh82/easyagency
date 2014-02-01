define([
    "model/base",
    "views/app",
    "views/contacts/list",
    "views/contacts/newuser",
    "collection/contacts"
], function (BaseModel ,AppView, ContactlistView, newuserView, ContactsCollection) {
 
    'use strict';
    Backbone.couch.databaseName = "contacts";   
    Backbone.couch.ddocName = "all";
    
    return function () {               
        // NOTE === Initiate contacts collection
        var contactsCollection = new ContactsCollection();
        contactsCollection.fetch();

        // NOTE === Build the new user form with modo
        newuserView.collection = contactsCollection;
        
        modo.init($('#body'), newuserView.root);  
        
        // NOTE === Build contacts list 
        var contactslistView = new ContactlistView({collection: contactsCollection});                      
    };
 
});
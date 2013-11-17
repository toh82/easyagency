define([
    "views/app",
    "views/contacts/list",
    "views/contacts/newuser",
    "collection/contacts"
], function (AppView, ContactlistView, newuserView, ContactsCollection) {
 
    'use strict';
    
    return function () {
        // NOTE === Load app view for main html structure
        var appView = new AppView();
        
        // NOTE === Initiate contacts collection and add test data
        var contactsCollection = new ContactsCollection();
        contactsCollection.add([{
            name: "Tobias Hartmann",
            address: "Castellring 103",
            mail: 'tobhart@foo.de'          
        }]);   
        
        // NOTE === Build the new user form with modo
        newuserView.collection = contactsCollection;
        modo.init($('#body'), newuserView.root);  
        
        // NOTE === Build contacts list 
        var contactslistView = new ContactlistView({collection: contactsCollection});                      
    };
 
});
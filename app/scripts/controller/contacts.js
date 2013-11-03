define([
    "views/app",
    "views/contacts/list",
    "model/contacts"
], function (AppView, ContactsListView, ContactsModel) {
 
    'use strict';
    
    return function () {
        console.log('contacts controller loaded');    
        var appView = new AppView();
        
        //require([module], function (module) {});      
        
        var contactsModel = new ContactsModel();
        var contactsListView = new ContactsListView({model: contactsModel});
    };
 
});
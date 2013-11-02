define([
    "views/contacts/list",
    "model/contacts"
], function (ContactsListView, ContactsModel) {
 
    'use strict';
    
    return function () {
        console.log('contacts controller loaded');    
        var contactsModel = new ContactsModel();
        var contactsListView = new ContactsListView({model: contactsModel});
    };
 
});
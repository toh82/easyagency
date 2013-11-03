define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _, Backbone, router) {
 
    'use strict';
 
    console.log('Application started');
    
    router.route("/*", "home", function () {
        this.loadModule("controller/foo");
    });

    router.route("contacts", "Contacts", function () {
        this.loadModule("controller/contacts");
    });    

    router.route('notes', 'Notes', function () {
        this.loadModule("controller/notes");
    });
    
    return {
        initialize: function () {
            Backbone.history.start();
        }
    };
});
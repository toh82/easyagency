define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    "model/base",
    "views/app"      
], function ($, _, Backbone, router, BaseModel, AppView) {
 
    'use strict';
 
    console.log('Application started');
    var homeview = new AppView(new BaseModel());
    
    router.route("/*", "home", function () {
        //this.loadModule("controller/home");
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
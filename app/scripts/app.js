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

    router.route("contacts", "contacts", function () {
        console.log('woo... du solltest eigentlich jetzt was machen');
        this.loadModule("controller/contacts");
    });    
     
    
    
    return {
        initialize: function () {
            Backbone.history.start();
        }
    };
});
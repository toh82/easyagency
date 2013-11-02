define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _, Backbone, router) {
 
    'use strict';
 
    router.route("/*", "home", function () {
        this.loadModule("controller/foo");
    });

    router.route("/contacts", "contacts", function () {
        this.loadModule("controller/contacts");
    });    
     
    return {
        initialize: function () {
            Backbone.history.start();
        }
    };
});
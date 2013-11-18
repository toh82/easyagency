(function () {
 
    'use strict';

    require.config({
        urlArgs: "v=" + (new Date()).getTime(),
        paths: {
            jquery: 'vendor/jquery-2.0.3.min',
            underscore: 'vendor/underscore-min',
            backbone: 'vendor/backbone-min',
            modo: 'vendor/modo-0.13-full',
            uikit: 'vendor/uikit.min',
            templates: '../templates',
            database: 'vendor/database'
        },
        shim: {
            "underscore": {
                deps: [],
                exports: "_"
            },
            "backbone": {
                deps: ["jquery", "underscore"],
                exports: "Backbone"
            },
            "modo": {
                deps: ["jquery","backbone"],
                exports: "modo"
            },
            "uikit": {
                deps: ["jquery"],
                exports: "uikit"
            },                       
            "database": {
                deps: ["jquery"],
                exports: "database"
            }            
        }
    });

    require(['app','database'], function(app) {
        app.initialize();
    });
    
}());    
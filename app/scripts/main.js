(function () {
 
    'use strict';

    require.config({
        urlArgs: "v=" + (new Date()).getTime(),
        paths: {
            jquery: 'vendor/jquery-2.0.3.min',
            underscore: 'vendor/underscore-min',
            backbone: 'vendor/backbone-min',
            modo: 'vendor/modo-0.12-full',
            templates: '../templates'
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
            }
        }
    });

    require(['app'], function(app) {
        app.initialize();
    });
    
}());    
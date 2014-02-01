(function () {
 
    'use strict';

    require.config({
        urlArgs: "v=" + (new Date()).getTime(),
        paths: {
            jquery: 'vendor/jquery-2.0.3.min',
            underscore: 'vendor/underscore-min',
            backbone: 'vendor/backbone-min',
            modo: 'vendor/modo-0.13-full',
            foundation: 'vendor/foundation.min',
            templates: '../templates',
            couchdb: 'vendor/backbone.couch',
            couchjs: 'vendor/couch'
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
            "foundation": {
                deps: ["jquery"],
                exports: "foundation"
            },                                 
            "couchdb": {
                deps: ["backbone","couchjs"],
                exports: "couchdb"            
            },
            "couchjs":{
                deps: ["jquery"],
                exports: "couchjs"            
            }
        }
    });

    require(['app','couchdb'], function(app) {        
        app.initialize();        
    });
    
}());    
<<<<<<< HEAD
(function () {
 
    'use strict';

    require.config({
        urlArgs: "v=" + (new Date()).getTime(),
        paths: {
            jquery: 'vendor/jquery-2.0.3.min',
            underscore: 'vendor/underscore-min',
            backbone: 'vendor/backbone-min',
            modo: 'vendor/modo-0.12-full',
            uikit: 'vendor/uikit.min',
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
            },
            "uikit": {
                deps: ["jquery"],
                exports: "uikit"
            }            
        }
    });

    require(['app'], function(app) {
        app.initialize();
    });
    
}());    
=======
require.config({
    paths: {
        jquery: 'vendor/jquery-2.0.3.min',
        underscore: 'vendor/underscore-min',
        backbone: 'vendor/backbone-min',
        database: 'vendor/database',
        templates: '../templates'
    }
});

require([  
    'views/app',
    'router',
    'vm'
], function(AppView, Router, Vm) {
    var appView = Vm.create({}, 'AppView', AppView);
    
    appView.render();
    
    Router.initialize({appView: appView}); 
});
>>>>>>> origin/database

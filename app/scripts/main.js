require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        jquery: 'vendor/jquery-2.0.3.min',
        underscore: 'vendor/underscore-min',
        backbone: 'vendor/backbone-min',
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
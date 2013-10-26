require.config({
    paths: {
        jquery: 'vendor/jquery-2.0.3.min',
        underscore: 'vendor/underscore-min',
        backbone: 'vendor/backbone-min',
        templates: '../templates'
    }
});

require(['views/login'], function(AppView) {
    new AppView;
});
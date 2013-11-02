define([
    'jquery',
    'backbone',
    'underscore',
], function($, Backbone, _, ContactsModel) {
    var appView = Backbone.View.extend({
        initialize: function() {                        
            console.log( 'hey there this is the main app view' );            
        }
    });

    return appView;
});
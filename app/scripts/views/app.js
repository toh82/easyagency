define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/main.html'
], function($, Backbone, _, html) {
    
    var appView = Backbone.View.extend({
        id: 'appwrapper',
        template: _.template(html),
        initialize: function() {                        
            console.log( 'hey there this is the main app view' );            
            this.render();
        },
        render: function () {
            this.$el.html(this.template());            
            $('body').append(this.$el);
        }
    });

    return appView;
});
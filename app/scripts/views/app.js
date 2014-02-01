define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/main.html'
], function($, Backbone, _, html) {
    
    var appView = Backbone.View.extend({
        id: 'appwrapper',
        template: _.template(html),
        initialize: function(model) {  
        console.log(model);                                          
            this.model = model;            
            this.render();
        },
        render: function () {                
            this.$el.html(this.template(this.model.toJSON()));            
            $('body').append(this.$el);
        }
    });

    return appView;
});
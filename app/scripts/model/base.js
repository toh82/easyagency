define([
  'underscore',
  'backbone'
], function(_, Backbone) {
    var BaseModel = Backbone.Model.extend({
        url : '',
        defaults: {
            headline: 'Welcome to easyagency',
            subline: 'youre easy and flexible agency management',
            topbar: [
                {
                    name: 'home',
                    url: '/'
                },
                {
                    name: 'contacts',
                    url: '#contacts'
                }
            ]
        },
        initialize: function( options ) {}
    });
    
    return BaseModel;

});
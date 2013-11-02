define([
    'jquery',
    'backbone',
    'underscore',
    'model/contacts',
    'text!templates/contacts/list.html'
], function($, Backbone, _, ContactsModel, html) {
    var list = Backbone.View.extend({
        el: $("#body"),
        template: _.template(html),
        initialize: function() {                        
            console.log( 'this should be the user list in near future!' );
            console.log( 'my model:', this.model );
        }
    });

    return list;
});
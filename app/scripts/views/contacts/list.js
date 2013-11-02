define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/contacts/list.html'
], function($, Backbone, _, html) {
    var ContactsListView = Backbone.View.extend({
        el: $("#body"),
        template: _.template(html),
        initialize: function() {                        
            console.log( 'this should be the user list in near future!' );
            console.log( 'my model:', this.model );
        }
    });

    return ContactsListView;
});
define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/contacts/list.html'
], function($, Backbone, _, html) {
    
    var ContactsListView = Backbone.View.extend({
        id: "contacts-list",
        template: _.template(html),
        initialize: function() {                        
            console.log( 'this should be the user list in near future!' );
            this.render();
        },
        render: function () {
            this.$el.html(this.template({
                contacts: [this.model.attributes]
            }));  
            
            $('#body').html(this.$el);
        }
    });

    return ContactsListView;
});
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
            this.render();
            //this.listenTo(this.collection, "add", this.render);
        },
        render: function () {        
            this.$el.html(this.template({
                contacts: this.collection.models
            }));  
            
            $('#body').append(this.$el);
        }
    });

    return ContactsListView;
});
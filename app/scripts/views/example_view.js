define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/contacts/newuser.html'
], function($, Backbone, _, html) {

    return = Backbone.View.extend({        
        id: "contacts-new",
        template: _.template(html),
        fieldlist: [
            'name',
            'address',
            'email'
        ],
        events:{
            'submit form': 'submit' 
        },
        initialize: function() {                
            console.log(this.collection.models);
            
            this.render();
        },
        render: function () {        
            this.$el.html( this.template() );            
            $('#body').append(this.$el);
        },
        submit: function(e) {
            e.preventDefault();
            
            var fields = this.$('input'),
                data = {};
    
            _.each(fields,function(field){
                data[field.name] = field.value;
            });
            
            this.collection.add(data);
 
            Backbone.history.navigate('#contacts', true);
        }        
    });
    
});
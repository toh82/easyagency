define([
  'underscore',
  'backbone',
  'database'
], function(_, Backbone) {
    var ContactsModel = Backbone.Model.extend({
        url : '',
        defaults : {
            name: "NA",
            address: "NA",
            mail: "NA"
        },  
        initialize: function( options ) {},
        sync: function(method, model) {
            if(method == 'create'){
                var doc = model.attributes;
                console.log('save a new user', doc);

                $.couch.db("contacts").saveDoc(doc, {
                    success: function(data) {
                        console.log(data);
                    },
                    error: function(status) {
                        console.log(status);
                    }
                });

            }
            return;
        }
    });
    
    return ContactsModel;

});
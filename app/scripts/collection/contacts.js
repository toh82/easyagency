define([
    'underscore',
    'backbone',
    'model/contacts',
    'database'
], function(_, Backbone, ContactsModel){
    
    var ContactCollection = Backbone.Collection.extend({
        model: ContactsModel,
        initialize: function(options){
            this.on("add", function(user) {
                console.log('user added:', user);
                user.save();
            });
        },
        sync: function (method, collection) {
            console.log(method, collection);

            if(method == 'read'){
                $.couch.db("contacts").allDocs({
                    success: function(data) {
                        console.log(data);
                    }
                });
            }
        }
    });
    
    return ContactCollection;
    
});
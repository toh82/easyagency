define([
    'underscore',
    'backbone',
    'model/contacts'
], function(_, Backbone, ContactsModel){
    
    var ContactCollection = Backbone.Collection.extend({
        doreduce: false,
        view:  "all", // NOTE this is the couch view parameter !!!
        model: ContactsModel,
        initialize: function(options){
            this.on("add", function(user) {
                console.log('user added:', user);
                user.save();
            });
        }
        /*sync: function (method, collection) {
            console.log(method, collection);

            if(method == 'read'){
                $.couch.db("contacts").allDocs({
                    success: function(data) {
                        console.log(data);
                    }
                });
            }
        }*/
    });
    
    return ContactCollection;
    
});
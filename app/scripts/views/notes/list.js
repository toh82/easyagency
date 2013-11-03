define([
    'jquery',
    'backbone',
    'underscore',
    'database'
], function($, Backbone, _, database) {
    

    var notesView = Backbone.View.extend({
        id: "notes-list",
        initialize: function() {        
            database.getAllDatabases();
        }
    });

    return notesView;
});
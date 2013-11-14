define([
    "views/app",
    "views/notes/list"
], function (AppView, NotesListView) {
 
    'use strict';
    
    return function () {
        console.log('notes controller loaded');
        
        var notesListView = new NotesListView();
    };
 
});
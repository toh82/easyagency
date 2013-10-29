define(['backbone'], function(Backbone) {
    var Test = Backbone.View.extend({
        initialize: function() {
            console.log( 'Foo!' );
        }
    });

    return Test;
});
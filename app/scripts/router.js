define([
  'underscore',
  'backbone'
], function (_, Backbone) {
    
    'use strict';
         
    var Router = Backbone.Router.extend({
        loadModule: function (module) {
            require([module], function (module) {
                module();
            });
<<<<<<< HEAD
        }
    });
=======
          }
 
          var page = Vm.create(self.appView, name, module, options);
          page.render();
        });
      });
    }
  });
 
  var initialize = function(options){
    var router = new AppRouter(options);
 
    // Default route goes first
    router.register('notes', 'NotesList', 'views/notes/list');
    //router.register('*actions', 'DashboardPage', 'views/dashboard/page');
    //router.register('optimize', 'OptimizePage', 'views/optimize/page');
    //router.register('modules', 'ModulesPage', 'views/modules/page');
    //router.register('backbone', 'BackbonePage', 'views/backbone/page');
    //router.register('backbone/:section', 'BackbonePage', 'views/backbone/page');
    //router.register('manager', 'ManagerPage', 'views/manager/page');
 
    Backbone.history.start();
  };
>>>>>>> origin/database
 
    return new Router();      
});
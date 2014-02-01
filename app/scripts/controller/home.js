define([
	"model/base",
    "views/app"    
], function (BaseModel,AppView) {
 
    'use strict';
    
    return function () {
        var homeview = new AppView(new BaseModel());
    };
 
});
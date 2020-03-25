sap.ui.define([
   'sap/ui/core/mvc/Controller'
],function(Controller){
    'use strict'
    return Controller.extend('com.myorg.todoList.controller.AddTodoList',{
        init(){
            console.log("loaded!!...");
        },
        NavToMain(){
            this.getRouter().navTo("RouteMainView");
        },
        getRouter : function () {
          return sap.ui.core.UIComponent.getRouterFor(this)
        }
    })
})
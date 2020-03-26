sap.ui.define([
   'sap/ui/core/mvc/Controller',
   "com/myorg/todoList/model/localStorage",
   "sap/ui/model/json/JSONModel"
],function(Controller,models, JSONModel){
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
        },
        onClick : function(e){
            console.log(e);
            console.log(this.getView().byId("Input1").getValue());
        }
    })
})
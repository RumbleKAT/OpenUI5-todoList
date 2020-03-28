sap.ui.define([
   'sap/ui/core/mvc/Controller',
   "com/myorg/todoList/model/localStorage",
   "sap/ui/model/json/JSONModel"
],function(Controller,models, JSONModel){
    'use strict'
    return Controller.extend('com.myorg.todoList.controller.AddTodoList',{
        onInit(){
            console.log("loaded!!...");
            var categories = {
                "types" : [
                    {
                        name : "todo"
                    },
                    {
                        name : "doing"
                    },
                    {
                        name : "done"
                    }
                ]
            };
            var dataObject = {
                title: "",
                type : "",
                description : ""
            }
            var dataObjectJSON = new JSONModel(dataObject);
            var categoriesJSON = new JSONModel(categories);

            this.getView().setModel(dataObjectJSON);
            this.getView().setModel(categoriesJSON,'categories');
        },
        NavToMain(){
            var oRouter = this.getRouter();
            oRouter.initialize(); // restart the router
            oRouter.navTo('RouteMainView',true);
            //this.getRouter().navTo("RouteMainView",true);
        },
        getRouter : function () {
          return sap.ui.core.UIComponent.getRouterFor(this)
        },
        onSave : function(){
            var oModel = this.getView().getModel().getData();
            
            if(oModel.title === '' || oModel.type === ''  || oModel.description === '' ){
                alert("please write all items!");   
                this.onClear();
                return;
            }else if(!(oModel.type === "todo" || oModel.type === "doing" || oModel.type === "done" )){
                alert("please select right item!");   
                this.onClear();
                return;
            }
            
            //save item
            var todoLists = models.getDatas();
            const maxIdx = todoLists.sort((el1,el2)=>el2.id - el1.id);
            const nextIdx = maxIdx[0].id + 1;
            
            oModel.id = nextIdx;
            todoLists.push(oModel);

            console.log(todoLists);
            models.setData(todoLists);
            alert("save success!");            
            
            this.onClear();
        },
        onClear : function(){
            var dataObject = {
                title: "",
                type : "",
                description : ""
            }
            this.getView().setModel(new JSONModel(dataObject));
        }
    })
})
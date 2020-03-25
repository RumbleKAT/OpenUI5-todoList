sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/myorg/todoList/model/localStorage",
  "sap/ui/model/json/JSONModel"
], function(Controller,models, JSONModel) {
  "use strict";

  return Controller.extend("com.myorg.todoList.controller.MainView", {
	onInit : function(){
		models.init();
		var todoList = Object.assign([],models.getDatas());
		var oModel = new JSONModel(todoList);
		
		this.getView().setModel(oModel,"todoList");
  },
 
  onAccept : function(oEventArgs){
    let row = oEventArgs.getSource();
    let context = row.getBindingContext("todoList");
    let content = context.oModel.getProperty(context.sPath);

    if(content.type === "todo"){
      content.type = "doing";
    }else if(content.type === "doing"){
      content.type = "done";
    }
    
    let oModel =this.getView().getModel("todoList").getData();
    oModel.forEach(element => {
      if(element.id === content.id){
        element = content;
      } 
    });
    models.setData(oModel);

    this.getView().setModel(new JSONModel(oModel),"todoList");
  },
 
  onDelete : function(oEventArgs){
    let row = oEventArgs.getSource();
    let context = row.getBindingContext("todoList");
    let content = context.oModel.getProperty(context.sPath);
    
    let oModel =this.getView().getModel("todoList").getData();
    let temp = oModel.filter(item => content.id != item.id);
    models.setData(temp);

    this.getView().setModel(new JSONModel(temp),"todoList");
  },
  NavToAddTodoList : function(){
    console.log("!!");
    this.getRouter().navTo("AddTodoList");
  },
  getRouter : function () {
    return sap.ui.core.UIComponent.getRouterFor(this)
  }

  });
});

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
	}	  
  });
});

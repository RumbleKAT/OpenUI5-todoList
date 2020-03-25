sap.ui.define([], function() {
	"use strict";
	return {
		init : function(){
			jQuery.sap.require("jquery.sap.storage");
			this._storage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
			let temp = this._storage.get("todoList");
			console.log(temp);
			if(temp){
				console.log("!!");
				this.todoList = JSON.parse(temp);
			}else{
				this.todoList = [
					{ title : "한컴" , category : "study", id : 1,name:"song",type : "todo", description : "설명....."},
					{ title: "song", category: "study", id: 5, name: "song",type: "done" ,description : "설명....."},
					{ title: "song", category: "working", id: 4, name: "song", type : "doing" ,description : "설명....."},
					{ title: "song", category: "study", id: 3, name: "song", type : "todo" ,description : "설명....."},
				  ];
			}
		},
		getData : function(type){
			return this.getDatas().filter(element => {
				return element.type === type
			});
		},
		getDatas : function(){
			return this.todoList;
		},
		deleteData : function(id){
			let leftData = JSON.parse(this.getDatas()).filter( element => element.id !== id);
			this.setData(leftData);
			this.updateData(leftData);
		},
		setData : function(data){
			this._storage.put('todoList',JSON.stringify(data));
			this.updateData(data);
		},
		updateData : function(data){
			this.todoList = data;
		}
	};
});

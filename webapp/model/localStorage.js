sap.ui.define([], function() {
	"use strict";
	return {
		init : function(){
			this._storage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
			let temp = this._storage.get("todoList");
			if(temp){
				this.todoList = JSON.parse(temp);
			}else{
				this.todoList = [
					{ title : "한컴" , id : 1, type : "todo", description : "설명....."},
					{ title: "song", id: 5,type: "done" ,description : "설명....."},
					{ title: "song", id: 4, type : "doing" ,description : "설명....."},
					{ title: "song", id: 3, type : "todo" ,description : "설명....."},
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
		deleteDataAll : function(){
			this.todoList = [];
			this.setData([]);
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

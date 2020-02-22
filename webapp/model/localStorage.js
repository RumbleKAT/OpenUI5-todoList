sap.ui.define([], function() {
	"use strict";
	return {
		init : function(){
			this._storage = jQuery.sap.storage("jQuery.sap.storage.Type.local");
			let temp = this._storage.get("todoList");
			if(temp){
				this.todoList = JSON.parse(temp);
			}else{
				this.todoList = [
					{ title : "한컴" , category : "study", id : 1,name:"song",type : "todo"},
					{ title: "song", category: "study", id: 5, name: "song",type: "done" },
					{ title: "song", category: "working", id: 4, name: "song", type : "doing" },
					{ title: "song", category: "study", id: 3, name: "song", type : "todo" },
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

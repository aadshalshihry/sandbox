let actions = {
	addTodo(text) {
		return {
			type: "ADD_TODO",
			text: text
		}
	},

	completedTodo(id){
		return {
			type: "COMPLETED_TODO",
			id: id
		}
	},

	deleteTodo(id){
		return {
			type: "DELETE_TODO",
			id: id
		}
	}
}

export default actions;
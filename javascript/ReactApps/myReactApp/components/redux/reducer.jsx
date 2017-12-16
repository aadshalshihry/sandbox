function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

let reducer = function(state, action) {
	switch(action.type){
		case "ADD_TODO":
			return Object.assign({}, state, {
				todos: [{
					id: getId(state),
					text: action.text,
					completed: false

				}, ...state.todos]
			})

		case "COMPLETED_TODO":
			return Object.assign({}, state, {
				todos: state.todos.map((todo) => {
					return todo.id === action.id ?
						Object.assign({}, todo, 
							{ completed: !todo.completed }) : todo
					})
				})

		case "DELETE_TODO":
			return Object.assign({}, state, {
				todos: state.todos.filter((todo) => {
					return todo.id !== action.id
				})
			})	



		default: 
			return state;
	}
}

export default reducer;
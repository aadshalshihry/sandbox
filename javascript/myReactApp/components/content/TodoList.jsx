import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';

class TodoList extends Component {

	render(){
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return <TodoItem 
									key={todo.id}  
									todo={todo}  
									completedTodo={this.props.actions.completedTodo}
									deleteTodo={this.props.actions.deleteTodo}
								/>
					})
				}
			</ul>
		);
	}
}

export default TodoList;
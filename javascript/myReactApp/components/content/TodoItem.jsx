import React, { Component } from 'react';


class TodoItem extends Component {
	handleComplete(){
		this.props.completedTodo(this.props.todo.id);
	}
	
	handleDelete(){
		this.props.deleteTodo(this.props.todo.id);
	}
	

	render(){
		return (
			<li>
				<div>{this.props.todo.text}</div>
				<button onClick={this.handleComplete.bind(this)}>Completede</button>
				<button onClick={this.handleDelete.bind(this)}>Delete</button>
			</li>
		);
	}
}

export default TodoItem;
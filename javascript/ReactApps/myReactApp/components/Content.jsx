import React, { Component } from 'react';

import TodoInput from './content/TodoInput.jsx';
import TodoList from './content/TodoList.jsx';


class Content extends Component {
	render(){
		return (
			<div>
				<p>Content react is working!</p>
				<TodoInput addTodo={this.props.actions.addTodo}/>
				<TodoList 
					todos={this.props.todos}  
					 actions={this.props.actions}
				/>
				
			</div>
		);
	}
}


export default Content;


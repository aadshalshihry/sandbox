import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './redux/actions.jsx'


import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

import UserList from './UserList.jsx';




class App extends Component {
	render(){
		return (
			<div>
				<Content  
					actions= {this.props.actions}
					todos={this.props.todos}
				/>
				<UserList />
			</div>
		);
	}
}

function mapSateToProps(state){
	return state;
}
function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapSateToProps, mapDispatchToProps)(App);

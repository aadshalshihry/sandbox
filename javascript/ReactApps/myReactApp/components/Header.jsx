import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {

	constructor(props){
		super(props);

		this.state = {
			data: {}
		}

		this.getData = this.getData.bind(this);
	}

	render(){
		return (
			<div>
				<p>Header react is working!</p>
				<button onClick={this.getData()}>GetData</button>
				
			</div>
		);
	}
}

export default Header;
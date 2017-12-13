import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './components/redux/store.jsx';
import { Provider } from 'react-redux';

import App from './components/App.jsx';

let initialState = {
	todos: [{
		id: 0,
		text: "Initial todo for deom",
		completed: false
	}]
}

let store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app'));

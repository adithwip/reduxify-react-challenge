import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home_page';
import { Provider } from 'react-redux';
import store from './stores'

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div className="App">
					<HomePage />
				</div>
			</Provider>
    );
  }
}

export default App;

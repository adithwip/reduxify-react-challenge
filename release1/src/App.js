import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './stores'
import './App.css';

import BookList from './containers/book_list'

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div>
					<BookList />
				</div>
			</Provider>
    );
  }
}

export default App;

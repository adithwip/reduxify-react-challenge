import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './containers/book_list'

class App extends Component {
  render() {
    return (
      <div>
				<BookList />
			</div>
    );
  }
}

export default App;

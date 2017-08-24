import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './stores'
import './App.css';

import BookList from './containers/book_list';
import BookDetail from './containers/book_detail';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div>
					<div className="container">
						<Navbar />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<BookList />
							</div>
							<div className="col">
								<BookDetail />
							</div>
						</div>
					</div>
				</div>
			</Provider>
    );
  }
}

export default App;

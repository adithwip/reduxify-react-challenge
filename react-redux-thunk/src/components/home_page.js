import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomPhoto } from '../actions/action_photo';

class HomePage extends Component {
	render() {

		if (!this.props.photo) {
				return (
					<div>
						Press this button to get a beautiful random photo.
						<button onClick={() => this.props.getRandomPhoto()} type="button" className="btn btn-primary">Get an inspiring photo</button>
					</div>
				)
			}
			console.log(this.props.photo)
		return(
			<div className="container">
				<div className="row">
					<div className="col">
						<button onClick={() => this.props.getRandomPhoto()} type="button" className="btn btn-primary">Get another inspiring photo</button>
					</div>
					<div className="col">
						<img src={this.props.photo.photo} />
					</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		photo: state.photoStore
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getRandomPhoto: () => dispatch(getRandomPhoto())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
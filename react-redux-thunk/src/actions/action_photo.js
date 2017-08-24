import axios from 'axios';

export const randomPhoto = (_photo) => {
	return {
		type: "RANDOM_PHOTO",
		payload: {
			photo: _photo
		}
	}
}

export const getRandomPhoto = () => {
	console.log('Masuk sini')
	return (dispatch, getState) => {
		let unsplashAPI = 'https://api.unsplash.com/photos/random/?client_id=2794771ebf8bf721526829bfbe18267b4a49d5e06c9a18176215be40c32d3956';

		axios.get(unsplashAPI)
		.then(response => {
			console.log('ini API -----', response.data.urls.full)
			dispatch(randomPhoto(response.data.urls.regular))
		})
		.catch(err => {
			console.log(err)
		})
	}
}
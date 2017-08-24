export default function(state=null, action) {
	switch (action.type) {
		case "RANDOM_PHOTO":
			console.log('getPhoto jalan, masuk nggak ya ke state?')
			let randomPhoto = action.payload.photo
			return {...state, photo: randomPhoto}
		default:
			return state
	}	
}
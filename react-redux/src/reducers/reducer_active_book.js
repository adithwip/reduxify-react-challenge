// State argument is not app state, only the state that reducer responsible for
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':	
			return action.payload;

		default:
	}
	
	return state;
}
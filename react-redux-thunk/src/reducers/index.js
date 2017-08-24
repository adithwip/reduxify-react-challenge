import { combineReducers } from 'redux';

import PhotoReducer from './reducer_photo';

const rootReducer = combineReducers({
	photoStore: PhotoReducer
})

export default rootReducer;
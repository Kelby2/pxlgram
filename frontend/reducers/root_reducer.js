import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './sessions/session_reducer';
import PhotosReducer from './photos/photos_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  photos: PhotosReducer,
});

export default RootReducer;

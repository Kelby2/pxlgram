import { combineReducers } from 'redux';
import SessionErrorsReducer from './sessions/session_errors_reducer';
import PhotosErrorsReducer from './photos/photos_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionsErrors: SessionErrorsReducer,
  photosErrors: PhotosErrorsReducer
});

export default ErrorsReducer;

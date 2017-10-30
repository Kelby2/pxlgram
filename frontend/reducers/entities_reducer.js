import { combineReducers } from 'redux';
import PhotosReducer from './photos/photos_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotosReducer,
});

export default EntitiesReducer;

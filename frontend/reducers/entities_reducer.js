import { combineReducers } from 'redux';
import PhotosReducer from './photos/photos_reducer';
import UsersReducer from './users/users_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotosReducer,
  users: UsersReducer
});

export default EntitiesReducer;

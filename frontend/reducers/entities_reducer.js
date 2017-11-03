import { combineReducers } from 'redux';
import PhotosReducer from './photos/photos_reducer';
import UsersReducer from './users/users_reducer';
import CommentsReducer from './comments/comments_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotosReducer,
  users: UsersReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;

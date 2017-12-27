import { combineReducers } from 'redux';
import CommentsReducer from './comments/comments_reducer';
import LikeReducer from './likes/likes_reducer';
import PhotosReducer from './photos/photos_reducer';
import UsersReducer from './users/users_reducer';

const EntitiesReducer = combineReducers({
  comments: CommentsReducer,
  photos: PhotosReducer,
  users: UsersReducer,
});

export default EntitiesReducer;

import { connect } from 'react-redux';
import { getPhotos, getPhotosByPage } from '../../actions/photo_actions';
import { getUsers } from '../../actions/user_actions';
import { getComments } from '../../actions/comment_actions'
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id]).reverse()

  const users = state.entities.users

  const comments = Object.keys(state.entities.comments)
  .map(id => state.entities.comments[id])

  return ({
    photos,
    users,
    comments
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getComments: () => dispatch(getComments()),
    getPhotosByPage: (page) => dispatch(getPhotosByPage(page)),
    getUsers: () => dispatch(getUsers()),
    addLike: (photo_id) => dispatch(addLike(photo_id)),
    deleteLike: () => dispatch(deleteLike(id))
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoIndex)

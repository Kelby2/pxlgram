import { connect } from 'react-redux';
import { getPhotosByPage } from '../../actions/photo_actions';
import { getUsers } from '../../actions/user_actions';
import { getComments } from '../../actions/comment_actions'
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const users = state.entities.users
  const photos = Object.keys(state.entities.photos)
  .map(id => state.entities.photos[id]).reverse()
  const comments = Object.keys(state.entities.comments)
  .map(id => state.entities.comments[id])

  return ({
    photos,
    users,
    comments
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getComments: () => dispatch(getComments()),
    getPhotosByPage: (page) => dispatch(getPhotosByPage(page)),
    getUsers: () => dispatch(getUsers()),
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoIndex);

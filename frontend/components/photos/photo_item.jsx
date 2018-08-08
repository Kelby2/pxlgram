import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import LikeContainer from '../likes/like_container';
import CommentForm from '../comments/comment_form';
import TimeStamp from '../photos/photo_time_stamp';
import CommentIndexContainer from '../comments/comment_index_container';
import { addComment, getPhotoComments } from '../../actions/comment_actions';
import { getPhoto } from '../../actions/photo_actions';

import HeaderNavBar from '../navbar/navbar';

class PhotoItem extends React.Component {

  state = { photoFetched: false };

  componentDidMount() {
    const { getPhoto, match } = this.props;
    getPhoto(match.params.photoId).then(() => this.setState({ photoFetched: true }));
  }

  render() {
    const { photo } = this.props;
    return (
      <main id='photo-screen-wrapper' className='main-wrapper'>
        <HeaderNavBar />
        {this.state.photoFetched &&
          <section id='photo-item'>
            <aside className="photo-img-container">
              <img className="photo-img" src={photo.imageUrl}></img>
            </aside>
            <aside className="photo-information">
              <article className='photo-author-info'>
                <Link to={`/${photo.author_name}`} className='stream-avatar-container'>
                  <img
                    className='stream-avatar'
                    src={photo.author_avatar} />
                </Link>
                <Link to={`/${photo.author_name}`} className='author-username'>
                   <div
                     className='stream-username'>
                     {photo.author_name}
                  </div>
                </Link>
              </article>
              <CommentIndexContainer photoId={photo.id} />
              <div className='icon-container'>
                <LikeContainer photo_id={photo.id} />
                <div
                  className='fa fa-comment-o fa-lg comments-icon'
                  onClick={ () => this.focusComment(photo.id) }>
                </div>
              </div>
              <div className='like-count'>
                { photo.likers.length} {( photo.likers.length === 1) ? 'like' : 'likes'}
              </div>
              <TimeStamp photoCreationTime={photo.created_at}/>
              <CommentForm id={photo.id} photo={ photo }/>
            </aside>
          </section>
        }
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId];

  return {
    photo
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    addComment: comment => dispatch(addComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    getPhoto: id => dispatch(getPhoto(id)),
    getPhotoComments: photo_id => dispatch(getPhotoComments(photo_id))
  });
};



export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem);

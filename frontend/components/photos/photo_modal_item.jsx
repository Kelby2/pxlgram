import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container';
import CommentForm from '../comments/comment_form';
import TimeStamp from '../photos/photo_time_stamp';
import CommentIndexContainer from '../comments/comment_index_container';

class PhotoModalItem extends React.Component {

  focusComment = id => {
    document.getElementById(id).focus();
  }

  render() {
    const { photo } = this.props;

    return (
      <main id="modal-container">
        <aside id="modal-photo-container">
          <img id="modal-photo" src={ photo.imageUrl }></img>
        </aside>

        <aside id="modal-photo-information">

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
      </main>
    );
  }
}

export default PhotoModalItem;

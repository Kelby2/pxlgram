import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container'
import CommentIndexContainer from '../comments/comment_index_container'

const focusComment = (event) => {
  const commentForm = document.getElementById(event)
  commentForm.focus();
}

const PhotoIndexItem = ({ photo, user}) => {
  if (photo.likerIds) {

    return (
      <li className='photo-post-container'>
        <div className='photo-post'>

          <article className='photo-author-info'>

            <div className='stream-avatar-container'>
              <Link to={`/${photo.author_name}`}>
                <img className='stream-avatar' src={photo.author_avatar} />
              </Link>
            </div>

            <div className='author-username'>
              <Link to={`${photo.author_name}`}>
                 <div className='stream-username'>
                   {photo.author_name}
                </div>
              </Link>
            </div>

          </article>

          <article className='photo-container'>
            <img className='photo' src={photo.imageUrl} />
          </article>

          <article className='photo-info-container'>

            <div className='icon-container'>
              <LikeContainer photo_id={photo.id} />
              <div
                className='fa fa-comment-o fa-lg comments-icon'
                onClick={ (event) => focusComment(photo.id)}>
              </div>
            </div>

            <div className='like-count'>
              {photo.likerIds.length} {(photo.likerIds.length === 1) ? 'like' : 'likes'}
            </div>

            <div className='caption-container'>
              <span className='author-username'>
                <Link to={`${photo.author_name}`}>
                  {(photo.caption && photo.caption.length > 0) ? photo.author_name : ""}
                </Link>
              </span>
              <span className='caption'>
                {photo.caption}
              </span>
            </div>

            <div className='comments-container'>
              <CommentIndexContainer photo_id={photo.id} />
            </div>

          </article>

        </div>
      </li>
    )} else {
      return null;
    }
};

export default PhotoIndexItem;

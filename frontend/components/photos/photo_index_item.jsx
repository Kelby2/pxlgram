import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container'
import CommentContainer from '../comments/comment_container'

const handleComment = (event) => {
  document.getElementById(event).focus();
}

const PhotoIndexItem = ({ photo, user}) => {
  if (photo.likerIds) {

    return (
      <li className='photo-post-container'>
        <div className='photo-post'>

          <article className='photo-author-info'>

            <div className='stream-avatar-container'>
              <Link to={`/${photo.author_name}`}>
                <img className='stream-avatar' src={user.avatarUrl} />
              </Link>
            </div>

            <div className='author-username'>
              <Link to={`${user.username}`}>
                 <div className='stream-username'>
                   {user.username}
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
                onClick={(event) => handleComment(photo.id)}>
              </div>
            </div>

            <div className='like-count'>
              {photo.likerIds.length} {(photo.likerIds.length === 1) ? 'like' : 'likes'}
            </div>

            <div className='caption-container'>
              <span className='author-username'>
                <Link to={`${user.username}`}>
                  {(photo.caption && photo.caption.length > 0) ? user.username : ""}
                </Link>
              </span>
              <span className='caption'>
                {photo.caption}
              </span>
            </div>

            <div className='comments-container'>
              <CommentContainer photo_id={photo.id} />
            </div>

          </article>

        </div>
      </li>
    )} else {
      return null;
    }
};

export default PhotoIndexItem;

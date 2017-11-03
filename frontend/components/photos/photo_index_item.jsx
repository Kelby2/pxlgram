import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container'

const PhotoIndexItem = ({ photo, user}) => {

  if (photo.likerIds) {

    return (
      <li className='photo-post-container'>
        <div className='photo-post'>
          <article className='photo-author-info'>

            <div className='stream-avatar-container'>
              <Link to={`/users/${photo.author_id}`}>
                <img className='stream-avatar' src={user.avatarUrl} />
              </Link>
            </div>

            <div className='author-username'>

              <Link to={`/users/${user.id}`}>
                 <div className='stream-username'>
                   {user.username}
                  </div>
              </Link>

            </div>
          </article>

          <div className='photo-container'>
            <img className='photo' src={photo.imageUrl} />
          </div>

          <article className='photo-info-container'>
            <div className='icon-container'>
              <LikeContainer photo_id={photo.id}/>
              <div className='fa fa-comment-o fa-lg comments-icon'>
              </div>
            </div>

            <div className='like-count'>
              {photo.likerIds.length} {(photo.likerIds.length === 1) ? 'like' : 'likes'}
            </div>

            <div className='caption-container'>
              <div className='caption-username'>
                <Link to={`/users/${user.id}`}>
                  {(photo.caption && photo.caption.length > 0) ? user.username : ""}
                </Link>
              </div>
              <div className='caption'>
                {photo.caption}
              </div>
            </div>

            <div className='comments-container'>
              <div>HI!</div>  
            </div>
          </article>
        </div>
      </li>
    )} else {
      return null;
    }
};

export default PhotoIndexItem;

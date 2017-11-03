import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container'

const PhotoIndexItem = ({ photo, user}) => {

  if (photo.likerIds && photo.caption) {
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

              <Link to={`/users/${photo.author_id}`}>
                 <div className='stream-username'>
                   {photo.author_name}
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
                {(photo.caption.length > 0) ? user.username : ""}
              </div>
              <div className='caption'>
                {photo.caption}
              </div>
            </div>
          </article>
        </div>
      </li>
    )} else {
      return null;
    }
};

export default PhotoIndexItem;

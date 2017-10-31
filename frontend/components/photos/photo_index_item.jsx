import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo, user }) => {


  return (
    <li className='photo-post-container'>
      <div className='photo-post'>
        <div className='photo-author-info'>

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
        </div>
        {}
        <div className='photo-container'>
          <img className='photo' src={photo.imageUrl} />
        </div>
        {photo.caption}
      </div>
    </li>
  )
};

export default PhotoIndexItem;

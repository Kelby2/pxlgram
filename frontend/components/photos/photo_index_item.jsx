import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo, user }) => {
  return (
    <li className='photo-post-container'>
      <div className='photo-post'>
        <div className='photo-author-info'>
          {/*<div>{avatar}</div>*/}
          <div className='author-username'>
            <Link to={`/users/${photo.author_id}`} id={photo.author_id}>
              {photo.author_name}
            </Link>
          </div>
        </div>
        {}
        <div className='photo-container'>
          <img className='photo' src={photo.image_url} />
        </div>
        {photo.caption}
      </div>
    </li>
  )
};

export default PhotoIndexItem;

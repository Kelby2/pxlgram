import React from 'react';

const PhotoIndexItem = ({ photo }) => {
  return (
    <li className='photo-post-container'>
      <div className='photo-post'>
        {/*temp author placement*/}
        <div className='photo-author-info'>
          {/*<div>{avatar}</div>*/}
          <div className='author-username'>{photo.author.username}</div>
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

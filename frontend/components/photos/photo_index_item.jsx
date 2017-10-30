import React from 'react';

const PhotoIndexItem = ({ photo }) => {
  return (
    <li className='photo-post-container'>
      <div className='photo-post'>
        <span className='photo-author'>{photo.author.username}</span>
        <div className='photo-container'>
          <img className='photo' src={photo.image_url} />
        </div>
        {photo.caption}
      </div>
    </li>
  )
};

export default PhotoIndexItem;

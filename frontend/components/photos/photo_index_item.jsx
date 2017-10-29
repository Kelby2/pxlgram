import React from 'react';

const PhotoIndexItem = ({ photo }) => {
  
  return (
    <li className='photo-stream-post'>
      <div className='photo-post'>
        <span className='photo-author'>{photo.author.username}</span>
        <span className='photo'>
          the photo will go here
          it will be huge
        </span>
        {photo.caption}
      </div>
    </li>
  )
};

export default PhotoIndexItem;

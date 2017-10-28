import React from 'react';

const PhotoIndexItem = ({ photo }) => {
  return (
    <li className='photo-stream-post'>
      <span className='photo'>
        the photo will go here
        it will be huge
      </span>
      {photo.caption}
    </li>
  )
};

export default PhotoIndexItem;

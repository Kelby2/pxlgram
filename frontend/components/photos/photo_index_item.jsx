import React from 'react';

const PhotoIndexItem = ({ photo }) => {
  return (
    <li className='photo-stream-post'>
      {photo.caption}
    </li>
  )
};

export default PhotoIndexItem;

import React from 'react';

const PhotoGridItem = ( { photo } ) => {
  return (
    <li className='user-photo'>
      <img className='user-photo-image' src={ photo.imageUrl } />
    </li>
  )
}

export default PhotoGridItem;

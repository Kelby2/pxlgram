import React from 'react';

const PhotoGridItem = ( { photo } ) => {
  return (
    <li className='grid-photo'>
      <img className='grid-photo-image' src={ photo.imageUrl } />
        <div className='grid-photo-stats'>
          <article className='stat-line'>
            <div className='fa fa-heart fa-lg'></div> { photo.likerIds.length }
            <div className='fa fa-comment fa-lg'></div> { photo.commenterIds.length }
          </article>
        </div>
    </li>
  )
}

export default PhotoGridItem;

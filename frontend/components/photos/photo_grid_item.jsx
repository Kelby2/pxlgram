import React from 'react';

const PhotoGridItem = ( { photo, onPhotoClick } ) => {
  return (
    <li>
      <div className='grid-photo' onClick={onPhotoClick} >
        <img className='grid-photo-image' src={ photo.imageUrl } />
        <div className='grid-photo-stats'>
          <article className='stat-line'>
            <div className='like-stat'>
              <span className='fa fa-heart fa-lg'></span> { photo.likers.length }
            </div>
            <div className='comment-stat'>
              <span className='fa fa-comment fa-lg'></span> { photo.commentIds.length }
            </div>
          </article>
        </div>
      </div>
    </li>
  );
};

export default PhotoGridItem;

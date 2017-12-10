import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGridItem = ( { photo } ) => {
  return (
    <Link className='grid-photo' to={`/${photo.author_name}/photos/${photo.id}`}>
      <img className='grid-photo-image' src={ photo.imageUrl } />
      <div className='grid-photo-stats'>
        <article className='stat-line'>
          <div className='fa fa-heart fa-lg'></div> { photo.likerIds.length }
          <div className='fa fa-comment fa-lg'></div> { photo.commentIds.length }
        </article>
      </div>
    </Link>
  )
}

export default PhotoGridItem;

import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGridItem = ( { photo } ) => {
  return (
    <main>
      <Link className='grid-photo' to={`/photos/${photo.id}/?taken-by=${photo.author_name}`}>
        <img className='grid-photo-image' src={ photo.imageUrl } />
        <div className='grid-photo-stats'>
          <article className='stat-line'>
            <div className='fa fa-heart fa-lg'></div> { photo.likers.length }
            <div className='fa fa-comment fa-lg'></div> { photo.commentIds.length }
          </article>
        </div>
      </Link>
    </main>
  )
}

export default PhotoGridItem;

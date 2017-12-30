import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGridItem = ( { photo } ) => {
  return (
    <main>
      <Link className='grid-photo' to={`/photos/${photo.id}/?taken-by=${photo.author_name}`}>
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
      </Link>
    </main>
  )
}

export default PhotoGridItem;

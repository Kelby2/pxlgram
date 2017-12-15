import React from 'react';
import { Link } from 'react-router-dom';

const PhotoModalItem = ( { photo } ) => {
  return (
    <main id="modal-container">
      <aside id="modal-photo-container">
        <img id="modal-photo" src={ photo.imageUrl }></img>
      </aside>

      <aside id="modal-photo-information">
        <article className='photo-author-info'>
          <div className='stream-avatar-container'>
            <Link to={`/${photo.author_name}`}>
              <img className='stream-avatar' src={photo.author_avatar} />
            </Link>
          </div>

          <div className='author-username'>
            <Link to={`/${photo.author_name}`}>
               <div className='stream-username'>
                 {photo.author_name}
              </div>
            </Link>
          </div>
        </article>
      </aside>
    </main>
  )
}

export default PhotoModalItem;

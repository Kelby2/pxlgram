import React from 'react';
import { Link } from 'react-router-dom';

const PhotoModalItem = ( { photo } ) => {
  return (
    <main id="modal-container">
      <aside id="modal-photo-container">
        <img id="modal-photo" src={ photo.imageUrl }></img>
      </aside>

      <aside id="modal-photo-information">
        { photo.author_name }
      </aside>
    </main>
  )
}

export default PhotoModalItem;

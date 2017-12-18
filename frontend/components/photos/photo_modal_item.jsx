import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';

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

        <div className='caption-container'>
          <span className='author-username'>
            <Link to={`${photo.author_name}`}>
              {(photo.caption && photo.caption.length > 0) ? photo.author_name : ""}
            </Link>
          </span>
          <span className='caption'>
            {photo.caption}
          </span>
        </div>

        <div className='comments-container'>
          <CommentIndexContainer photoId={photo.id} />
        </div>

        <div className='like-count'>
          { photo.likers.length} {( photo.likers.length === 1) ? 'like' : 'likes'}
        </div>

      </aside>
    </main>
  )
}

export default PhotoModalItem;

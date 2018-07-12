import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentForm from '../comments/comment_form';
import TimeStamp from './photo_time_stamp';

const PhotoIndexItem = props => {

  const focusComment = id => {
    document.getElementById(id).focus();
  };

  const {
    id,
    author_name,
    author_avatar,
    imageUrl,
    likers,
    created_at } = props.photo;

  return (
    <li className='photo-post-container'>
      <div className='photo-post'>

        <article className='photo-author-info'>
          <div className='stream-avatar-container'>
            <Link to={`/${author_name}`}>
              <img className='stream-avatar' src={author_avatar} />
            </Link>
          </div>

          <div className='author-username'>
            <Link to={`${author_name}`}>
               <div className='stream-username'>
                 {author_name}
              </div>
            </Link>
          </div>
        </article>

        <article className='photo-container'>
          <img className='photo' src={imageUrl} />
        </article>

        <article className='photo-info-container'>
          <div className='icon-container'>
            <LikeContainer photo_id={id} />
            <div
              className='fa fa-comment-o fa-lg comments-icon'
              onClick={ () => focusComment(id) }>
            </div>
          </div>

          <div className='like-count'>
            {likers.length} {(likers.length === 1) ? 'like' : 'likes'}
          </div>

          <CommentIndexContainer photoId={id} />
          <TimeStamp photoCreationTime={created_at} />
          <CommentForm id={id} photo={ props.photo } />
        </article>

      </div>
    </li>
  );
};

export default PhotoIndexItem;

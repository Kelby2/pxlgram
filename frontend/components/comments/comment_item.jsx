import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = ({ comment }) => {
  return (
    <li className='comment'>
      <Link to={`/${comment.author_name}`}>
        <span className='comment-author'>{comment.author_name}</span>
      </Link>
      <span className='comment-body'>{comment.body}</span>
    </li>
  )
}

export default CommentItem;

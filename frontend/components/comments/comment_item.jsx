import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = ({ comment }) => {
  
  return (
    <li className='comment'>
      <div className='comment-body'>{comment.body}</div>
    </li>
  )
}

export default CommentItem;

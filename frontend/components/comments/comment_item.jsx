import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = ({ comment, user }) => {
  return (
    <li className='comment'>
      <Link to={`${user.username}`}>
        <span className='comment-author'>{user.username}</span>
      </Link>
      <span className='comment-body'>{comment.body}</span>
    </li>
  )
}

export default CommentItem;

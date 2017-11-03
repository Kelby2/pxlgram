import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = ({ comment, user }) => {
  return (
    <li className='comment'>
      <Link to={`/users/${user.id}`}>
      <div className='comment-author'>{user.username}</div>
      </Link>
      <div className='comment-body'>{comment.body}</div>
    </li>
  )
}

export default CommentItem;

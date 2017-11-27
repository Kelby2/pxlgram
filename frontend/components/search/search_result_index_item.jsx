import { Link } from 'react-router-dom';
import React from 'react';

const SearchResultsIndexItem = ({ user }) => {

  return (
    <li>
      <Link className='results' to={`/${user.username}`}>
        <img className='result-avatar' src={user.avatarUrl} />
        <aside className='result-user-info'>
          <div className='result-username'> { user.username } </div>
          <div className='result-fullname'> { user.fullname }</div>
        </aside>
      </Link>
    </li>
  )
}

export default SearchResultsIndexItem;

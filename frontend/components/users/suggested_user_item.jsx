import React from 'react';

const SuggestedUserItem = ({ user }) => {
  return (
    <li>
      <div className='results'>
        <img className='result-avatar' src={user.avatarUrl} />
        <aside className='result-user-info'>
          <div className='result-username'> { user.username } </div>
          <div className='result-fullname'> { user.fullname }</div>
        </aside>
      </div>
    </li>
  );
};

export default SuggestedUserItem;

import React from 'react';
import { Link } from 'react-router-dom';;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id)
  }

  render () {
    const user = this.props.user

    if (!user) {
      return null;
    } else {
      return (
        <main className='user-profile-container'>
          <div className='user-profile'>

            <article className='user-profile-header'>

              <div className='user-avatar-container'>
                <div className='user-avatar'>
                  <img className='avatar' src={user.avatarUrl} />
                </div>
              </div>

              <div className='user-info-container'>
                <span className='user-name'>{user.username}</span>
                <button className='toggleFollowButton'>Follow</button>
                <div className="fa fa-gear fa-lg edit-dropdown"></div>
                <span className='user-stats'>
                  {user.photoIds.length} posts
                  24 followers
                  13 following
                </span>

                <span className='user-bio'>
                  <div className='user-full-name'>{user.fullname}</div>
                  <div> this will be my bio </div>
                </span>
              </div>

            </article>

            <article className='user-photos'>
              <h2> ello </h2>
            </article>

          </div>

        </main>
      )
    };
  }
}

export default UserProfile;

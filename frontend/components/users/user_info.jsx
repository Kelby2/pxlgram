import React from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {

  state = { currentUserFollows: false }

  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.props.getUser(this.props.username);
    }
  }

  renderEditProfileButton() {
    return (
      <Link to={`/${this.props.username}/edit`}>
        <button
          className='edit-profile-button'>
          Edit Profile
        </button>
      </Link>
    );
  }

  renderFollowerButton() {
    const { currentUserFollows } = this.state;

    return (
      <button
        onClick={() => this.setState({ currentUserFollows: !this.state.currentUserFollows })}
        className={currentUserFollows ? 'unfollow-btn' : 'follow-btn'}>
        {currentUserFollows ? 'Following' : 'Follow'}
      </button>
    );
  }

  renderLogOutButton() {
    return (
      <div
        onClick={() => this.props.logout()}
        className="fa fa-sign-out fa-lg">
      </div>
    );
  }

  render() {
    const { user, isCurrentUser } = this.props;

    return (
      <div>
        {user &&
          <article className='user-profile-header'>
            <div className='user-avatar-container'>
              <div className='user-avatar'>
                <img className='avatar' src={user.avatarUrl} />
              </div>
            </div>

            <div className='user-info-container'>
              <div className='info-section-1'>
                <span className='user-name'>{user.username}</span>
                {isCurrentUser ?
                  this.renderEditProfileButton() : this.renderFollowerButton()}
                {isCurrentUser && this.renderLogOutButton()}
              </div>

              <div className='info-section-2'>
                <span className='user-stats'>
                  <div className='stat photo-count'>
                    {user.photoIds.length}
                  </div> {user.photoIds.length === 1 ? 'post' : 'posts'}
                  <div className='stat follower-count'></div>
                  <div className='stat following-count'></div>
                </span>
              </div>

              <div className='info-section-3'>
                <p className='user-bio'>
                    <span className='user-full-name'>{user.fullname} </span>  {user.bio}
                </p>
              </div>
            </div>
          </article>
        }
      </div>
    );
  }
}

export default UserInfo;

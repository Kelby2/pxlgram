import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/follow_actions';

class SuggestionsIndexItem extends React.Component {

  onFollowPress() {
    if (this.props.currentUserFollows) {
      this.props.unfollowUser(this.props.user.username);
      this.props.changeFollowCount(-1);
    } else {
      this.props.followUser(this.props.user.username);
      this.props.changeFollowCount(1);
    }
  }

  render() {
    const { user, currentUserFollows } = this.props;

    return (
      <li className='suggestions-result-item'>
        <aside className='suggestion-info'>
          <Link style={{ marginRight: '16px' }} to={`${user.username}`}>
            <img className='suggestion-avatar' src={ user.avatarUrl} />
          </Link>
          <div className='suggestion-user-info'>
            <Link to={`${user.username}`}>
              <div className='result-username'> { user.username } </div>
            </Link>
            <div className='result-fullname'> { user.fullname }</div>
          </div>
        </aside>

        <button
          onClick={() => this.onFollowPress()}
          className={currentUserFollows ? 'mini-unfollow' : 'mini-follow'}
          >{currentUserFollows ? 'Following' : 'Follow' }
        </button>
      </li>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const currentUserFollows = currentUser.followings.includes(ownProps.user.username);

  return ({ currentUserFollows });
};

const mapDispatchToProps = dispatch => {
  return ({
    followUser: user => dispatch(followUser(user)),
    unfollowUser: user => dispatch(unfollowUser(user)),
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)(SuggestionsIndexItem);

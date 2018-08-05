import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/follow_actions';

class SuggestedUserItem extends React.Component {

  onFollowPress() {
    if (this.props.currentUserFollows) {
      this.props.unfollowUser(this.props.user.username);
    } else {
      this.props.followUser(this.props.user.username);
    }
  }

  render() {
    const { user } = this.props;

    return (
      <li id='suggestion-results'>
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
          className={this.props.currentUserFollows ? 'mini-unfollow' : 'mini-follow'}
          >{this.props.currentUserFollows ? 'Following' : 'Follow' }
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
  mapDispatchToProps)(SuggestedUserItem);

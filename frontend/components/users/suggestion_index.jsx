import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import SuggestedUserItem from './suggested_user_item';
import { getUserSuggestions, clearSuggestions } from '../../actions/user_actions';

class SuggestionIndex extends Component {

  state = {
    suggestionsFetched: false,
    usersFollowed: 0,
  }

  componentDidMount() {
    this.props.getUserSuggestions()
    .then(() => this.setState({ suggestionsFetched: true }));
  }

  componentWillUnmount() {
    this.props.clearSuggestions();
  }

  changeFollowCount(change) {
    this.setState({ usersFollowed: this.state.usersFollowed += change });
  }

  render() {
    if (!this.state.suggestionsFetched) {
      return (
        <div className='loader'>
          <BeatLoader
            loaderStyle={{ selfAlign: 'center' }}
            size={30}
            color={'#e2e2e2'}
            loading={this.state.photosLoaded} />
        </div>
      );
    }

    return (
      <section id='suggestion-index'>
        <ul id='suggestion-page'>
          {
            this.props.suggestedUsers.map(user => {
              return <SuggestedUserItem
                key={user.username}
                user={user}
                changeFollowCount={this.changeFollowCount.bind(this)} />;
            })
          }
          {this.state.usersFollowed > 0 &&
            <li id='get-started'>
              <button onClick={() => window.location.reload()} className='follow-btn'>
                Get Started
              </button>
            </li>
          }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const suggestedUsers = state.ui.userSuggestionResults;

  return { suggestedUsers };
};

const mapDispatchToProps = dispatch => {
  return ({
    getUserSuggestions: () => dispatch(getUserSuggestions),
    clearSuggestions: () => dispatch(clearSuggestions),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionIndex);

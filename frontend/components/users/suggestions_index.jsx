import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import SuggestionsIndexItem from './suggestions_index_item';
import { getUserSuggestions, clearSuggestions } from '../../actions/user_actions';

class SuggestionsIndex extends Component {

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

  getStarted() {
    window.location.reload();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div id='suggestion-index'>
        <div className='page-header'>Suggested for you</div>
        <ul id='suggestions'>
          {
            this.props.suggestedUsers.map(user => {
              return <SuggestionsIndexItem
                key={user.username}
                user={user}
                changeFollowCount={this.changeFollowCount.bind(this)} />;
            })
          }
          {this.state.usersFollowed > 0 &&
            <li id='get-started-container'>
              <button onClick={this.getStarted.bind(this)} className='follow-btn'>
                Get Started
              </button>
            </li>
          }
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsIndex);

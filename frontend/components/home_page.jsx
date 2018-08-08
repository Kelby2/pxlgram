import React from 'react';
import { connect } from 'react-redux';

import { getPhotosPage, resetPhotos } from '../actions/photo_actions';
import HeaderNavBar from './navbar/navbar';
import SuggestionIndex from './users/suggestion_index';
import PhotoIndexContainer from './photos/photo_index_container';

class HomePage extends React.Component {
  state = { loading: true };

  componentDidMount() {
    this.props.resetPhotos();
    this.props.getPhotosPage(1).then(() => this.setState({ loading: false }));
  }

  renderContent() {
    return this.props.isNewUser ? <SuggestionIndex /> : <PhotoIndexContainer />;
  }

  render() {
    return (
      <main id='home-page' className='main-wrapper'>
        <HeaderNavBar />
        {this.state.loading ? null : this.renderContent()}
      </main>
    );
  }
}

const mapStateToProps = state => {
  const isNewUser = Object.keys(state.entities.photos).length === 0;

  return { isNewUser };
};

const mapDispatchToProps = dispatch => {
  return ({
    resetPhotos: () => dispatch(resetPhotos()),
    getPhotosPage: page => dispatch(getPhotosPage(page)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

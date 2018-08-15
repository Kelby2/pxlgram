import React from 'react';
import { BeatLoader } from 'react-spinners';

import HeaderNavBar from '../navbar/navbar';
import UserInfoContainer from './user_info_container';
import LogoutModal from './logout_modal';
import PhotoGridItem from '../photos/photo_grid_item';
import PhotoModalContainer from '../photos/photo_modal_container';

class UserProfile extends React.Component {

  state = { loadingPhotos: true, photoModalActive: false, logoutModalActive: false };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      document.title = `${this.props.match.params.username} ∙ pxlg`;
      this.setState({ loadingPhotos: true, photoModalActive: false });
      this.props.getUserPhotos(this.props.match.params.username).then(() => {
        this.setState({ loadingPhotos: false });
      });
    } else if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ photoModalActive: false });
    }
  }

  componentDidMount() {
    const { getUserPhotos, match } = this.props;
    const { username } = match.params;

    getUserPhotos(username).then(() =>
      {this.setState({ loadingPhotos: false });}
    );

    document.title = `${username} ∙ pxlg`;
  }

  onPhotoClick(photo) {
    this.setState({ photoModalActive: true });
    this.photoId = photo.id;
  }

  onLogoutClick() {
    this.setState({ logoutModalActive: true });
  }

  onModalClose() {
    this.setState({ photoModalActive: false, logoutModalActive: false });
  }

  render () {
    const { photos, username } = this.props;

    return (
      <main id='user-profile-container' className='main-wrapper'>
        <HeaderNavBar />
        {this.state.logoutModalActive &&
          <LogoutModal
            onLogoutConfirm={this.props.logout}
            onModalClose={() => this.onModalClose()}
            isOpen={this.state.logoutModalActive}
          />}
        {this.state.photoModalActive &&
          <PhotoModalContainer
            fromProfile={true}
            onModalClose={() => this.onModalClose()}
            photoId={this.photoId}/>}
        <div className='user-profile'>
          <UserInfoContainer onLogoutClick={this.onLogoutClick.bind(this)} username={username} />
          {!this.state.loadingPhotos ?
            <article id='user-photos-container'>
              <ul className='photos-grid-container'>
                {photos.map(photo => (
                  <PhotoGridItem
                    key={photo.id}
                    photo={photo}
                    onPhotoClick={() => this.onPhotoClick(photo)}
                  />
                ))}
              </ul>
            </article>
            :
            <div className='loader'>
              <BeatLoader
                size={30}
                color={'#e2e2e2'}
                loading={ this.state.photosLoaded } />
            </div>
          }
        </div>
      </main>
    );
  }

}

export default UserProfile;

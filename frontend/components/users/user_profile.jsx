import React from 'react';
import { BeatLoader } from 'react-spinners';
import UserInfoContainer from './user_info_container';
import PhotoGridItem from '../photos/photo_grid_item';
import PhotoModalContainer from '../photos/photo_modal_container';

class UserProfile extends React.Component {

  state = { loadingPhotos: true, modalActive: false };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.setState({ loadingPhotos: true, modalActive: false });
      this.props.getUserPhotos(this.props.match.params.username).then(() => {
        this.setState({ loadingPhotos: false });
      });
    } else if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ modalActive: false });
    }
  }

  componentDidMount() {
    const { getUserPhotos, match } = this.props;
    const { username } = match.params;

    getUserPhotos(username).then(() =>
      {this.setState({ loadingPhotos: false });}
    );
  }

  onPhotoClick(photo) {
    this.setState({
      modalActive: true
     });
    this.photoId = photo.id;
    history.pushState(
      {}, 'photo', `#/photos/${photo.id}?taken-by=${photo.author_name}`
    );
  }

  onModalClose() {
    this.setState({ modalActive: false });
  }

  render () {
    const { photos, username } = this.props;

    return (
      <main className='user-profile-container'>
        {this.state.modalActive &&
          <PhotoModalContainer
            onModalClose={() => this.onModalClose()}
            photoId={this.photoId}/>}
        <div className='user-profile'>
          <UserInfoContainer username={username} />
          { !this.state.loadingPhotos ?
            <article className='user-photos-container'>
              <ul className='photos-grid-container'>
                {
                  photos.map(photo => {
                    return (
                      <PhotoGridItem
                        key={photo.id}
                        photo={photo}
                        onPhotoClick={() => this.onPhotoClick(photo)} />
                    );
                  })
                }
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

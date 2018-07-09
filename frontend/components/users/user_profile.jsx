import React from 'react';
import { Link, Route } from 'react-router-dom';
import PhotoGridItem from '../photos/photo_grid_item';
import PhotoModalContainer from '../photos/photo_modal_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.username !== this.props.match.params.username) {
      this.props.getUser(nextProps.match.params.username);
      this.props.getUserPhotos(nextProps.match.params.username);
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
    this.props.getUserPhotos(this.props.match.params.username);
  }

  render () {
    const user = this.props.user;
    let logOutButton;
    let profileButton;

    if (user && user.photoIds) {
      if (user.username === this.props.currentUser.username) {
        logOutButton = (
          <div
            onClick={() => this.props.logout()}
            className="fa fa-sign-out fa-lg">
          </div>
        );

        profileButton = (
          <Link to={`/${user.username}/edit`}>
            <button
              className='edit-profile-button'>
              Edit Profile
            </button>
          </Link>
        );
      }

      return (
        <main className='user-profile-container'>
          <Route exact path='/:username/photos/:photoId' component={ PhotoModalContainer }/>
          <div className='user-profile'>
            <article className='user-profile-header'>
              <div className='user-avatar-container'>
                <div className='user-avatar'>
                  <img className='avatar' src={user.avatarUrl} />
                </div>
              </div>

              <div className='user-info-container'>
                <div className='info-section-1'>
                  <span className='user-name'>{user.username}</span>
                  {profileButton}
                  {logOutButton}
                </div>

                <div className='info-section-2'>
                  <span className='user-stats'>
                    <div className='stat photo-count'>{user.photoIds.length} </div> posts
                    <div className='stat follower-count'></div>
                    <div className='stat following-count'></div>
                  </span>
                </div>

                <div className='info-section-3'>
                  <p className='user-bio'>
                      <span className='user-full-name'>{user.fullname} </span>  {this.props.user.bio}
                  </p>
                </div>
              </div>
            </article>

            <article className='user-photos-container'>
              <ul className='photos-grid-container'>
                {
                  this.props.photos.map(photo => {
                    return(
                      <PhotoGridItem
                        key={ photo.id }
                        photo={ photo }
                        />
                      );
                  })
                }
              </ul>
            </article>
          </div>
        </main>
      );
    } else {
      return null;
    }
  }

}

export default UserProfile;

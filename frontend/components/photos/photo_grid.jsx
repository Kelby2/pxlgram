import React from 'react';

import HeaderNavbar from '../navbar/navbar';
import PhotoGridItem from './photo_grid_item';
import PhotoModalContainer from './photo_modal_container';

const FETCH_DELAY = 500;

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loadingPhotos: false,
      modalActive: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.getPhotosGrid = this.props.getPhotosGrid.bind(this);
    this.getAdditionalPhotos = this.getAdditionalPhotos.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ modalActive: false });
    }
  }

  componentDidMount() {
    this.props.resetPhotos();
    this.props.getPhotosGrid(this.state.page);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const nearBottom = (window.scrollY
                          + window.innerHeight
                          + 100 > document.body.clientHeight);
    if (nearBottom
      && !this.state.loadingPhotos) {
      this.setState( { page: this.state.page + 1, loadingPhotos: true } );
      this.queueAdditionalPhotos();
    }
  }

  queueAdditionalPhotos() {
    this.queuePhotos = setTimeout(() => {
      this.getAdditionalPhotos();
    }, FETCH_DELAY);
  }

  getAdditionalPhotos() {
    this.getPhotosGrid(this.state.page)
    .then(()=> this.setState( { loadingPhotos: false } ));
  }

  onPhotoClick(photo) {
    this.setState({
      modalActive: true
     });
    this.photoId = photo.id;
    history.pushState(
      {}, 'photo', `#/photos/${photo.id}/?taken-by=${photo.author_name}`
    );
  }

  onModalClose() {
    this.setState({ modalActive: false });
  }

  render() {

    return (
      <main id='explore-page' className='main-wrapper'>
        <HeaderNavbar />
        <section className='explore-photos-container'>
          <div className='page-header'>Explore</div>
          {this.state.modalActive &&
            <PhotoModalContainer
              onModalClose={() => this.onModalClose()}
              photoId={this.photoId}/>}
          <ul className='photos-grid-container'>
            {
              this.props.photos.map(photo => {
                return (
                  <PhotoGridItem
                    key={photo.id}
                    photo={photo}
                    onPhotoClick={() => this.onPhotoClick(photo)}/>
                );
              })
            }
          </ul>
        </section>
      </main>
    );
  }
}

export default PhotoGrid;

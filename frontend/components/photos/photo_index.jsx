import React from 'react';
import PhotoIndexItem from './photo_index_item';

const FETCH_DELAY = 500;

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loadingPhotos: false,
      photosFetched: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.getPhotosPage = this.props.getPhotosPage.bind(this);
    this.getAdditionalPhotos = this.getAdditionalPhotos.bind(this);
  }

  componentDidMount() {
    this.props.resetPhotos();
    this.props.getPhotosPage(this.state.page).then(
      () => {this.setState({ photosFetched: true });}
    );
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const nearBottom = (window.scrollY
                          + window.innerHeight
                          + 200 > document.body.clientHeight);
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
    this.getPhotosPage(this.state.page)
    .then(() => this.setState( { loadingPhotos: false } ));
  }

  renderContent() {
    if (this.props.photos.length === 0) {
      return (
        <div>Placeholder for suggestions index</div>
      );
    }

    return (
      <ul className='photo-stream'>
        {
          this.props.photos.map(photo => {
            return(
              <PhotoIndexItem
                key={photo.id}
                photo={photo}
              />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className='photo-stream-container'>
        {this.state.photosFetched && this.renderContent()}
      </div>
    );
  }

}

export default PhotoIndex;

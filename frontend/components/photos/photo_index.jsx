import React from 'react';
import PhotoIndexItem from './photo_index_item';
import SuggestionIndex from '../users/suggestion_index';

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
        <article id='suggestions-page'>
          <div className='page-header'>Suggested for you</div>
          <SuggestionIndex />
        </article>
      );
    }

    return (
      <ul id='photo-stream-container'>
        {this.props.photos
          .map(photo =>
            <PhotoIndexItem key={photo.id} photo={photo} />
          )
        }
      </ul>
    );
  }

  render() {
    return (
      <article id='home-page'>
        {this.state.photosFetched && this.renderContent()}
      </article>
    );
  }

}

export default PhotoIndex;

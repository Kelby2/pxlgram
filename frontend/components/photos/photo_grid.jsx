import React from 'react';
import PhotoGridItem from './photo_grid_item';
import { BeatLoader } from 'react-spinners';
import { Route } from 'react-router-dom';
import PhotoModalContainer from '../photos/photo_modal_container';

const FETCH_DELAY = 500;

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loadingPhotos: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.getPhotosGrid = this.props.getPhotosGrid.bind(this);
    this.getAdditionalPhotos = this.getAdditionalPhotos.bind(this);
  }

  componentDidMount() {
    $('html').scrollTop(0);
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

  render() {
    let loader = (
      <div className='loader'>
        <BeatLoader
          color={'#e2e2e2'}
          loading={ this.state.loadingPhotos }/>
      </div>
    );

    return (
      <article className='explore-page'>
        <div className='explore-photos-container'>

          <ul className='photos-grid-container'>
            <div className='explore-header'>Explore</div>
            {
              this.props.photos.map(photo => {
                return (
                  <PhotoGridItem
                    key={ photo.id }
                    photo={ photo }/>
                );
              })
            }
          </ul>
          {loader}
        </div>
      </article>
    );
  }
}

export default PhotoGrid;

import React from 'react';
import PhotoGridItem from './photo_grid_item';
import { BeatLoader } from 'react-spinners';

const FETCH_DELAY = 500;

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
      end: false,
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.getPhotosByGrid = this.props.getPhotosByGrid.bind(this);
    this.getAdditionalPhotos = this.getAdditionalPhotos.bind(this);
  }

  componentDidMount() {
    $('html').scrollTop(0);
    this.props.getPhotosByGrid(this.state.page);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps) {
    const lastPhotos = (this.props.photos.length === newProps.photos.length);
    if (lastPhotos) {
      this.setState( { loading: false,  end: true } );
    }
  }

  handleScroll() {
    const nearBottom = (window.scrollY
                          + window.innerHeight
                          + 100 > document.body.clientHeight)
    if (nearBottom && !this.state.loading && !this.state.end) {
      this.setState( { page: this.state.page + 1 } );
      this.queueAdditionalPhotos();
    }
  }

  queueAdditionalPhotos() {
    this.queuePhotos = setTimeout(this.getAdditionalPhotos, FETCH_DELAY)
  }

  getAdditionalPhotos() {
    clearTimeout(this.queuePhotos);
    this.setState( { loading: false } );
    this.getPhotosByGrid(this.state.page);
  }

  render() {
    let loader = (
      <div className='loader'>
        <BeatLoader
          color={'#e2e2e2'}
          loading={ this.state.loading }/>
      </div>
    )

    return (
      <article className='explore-page'>
        <div className='explore-photos-container'>
          <div className='explore-header'>Explore</div>

          <ul className='photos-grid-container'>
            {
              this.props.photos.map(photo => {
                return (
                  <PhotoGridItem
                    key={ photo.id }
                    photo={ photo }/>
                )
              })
            }
          </ul>
          {loader}
        </div>
      </article>
    )
  }
}

export default PhotoGrid;

import React from 'react';
import PhotoGridItem from './photo_grid_item';
import { BeatLoader } from 'react-spinners';

const FETCH_DELAY = 500;

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.getPhotosByGrid = this.props.getPhotosByGrid.bind(this);
    this.getAdditionalPhotos = this.getAdditionalPhotos.bind(this);
  }

  componentDidMount() {
    $('html').scrollTop(0);
    this.props.getPhotosByGrid(this.state.page);
    console.log('i am mounted')
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.photos.length === newProps.photos.length) {
      this.setState( { loading: false },
      window.removeEventListener('scroll', this.handleScroll));
    } else {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll() {
    const nearBottom = (window.scrollY
                          + window.innerHeight
                          + 200 > document.body.clientHeight)
    if (nearBottom) {
      this.setState( { page: this.state.page + 1, loading: true },
      this.queueAdditionalPhotos );
    }
  }

  queueAdditionalPhotos() {
    // Removes listener so the page does not double load
    window.removeEventListener('scroll', this.handleScroll);
    this.queuePhotos = setTimeout(this.getAdditionalPhotos, FETCH_DELAY)
  }

  getAdditionalPhotos() {
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

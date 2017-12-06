import React from 'react';
import PhotoGridItem from './photo_grid_item';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    $('html').scrollTop(0);
    this.props.getPhotosByGrid(this.state.page);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const distanceFromTop = $(window).scrollTop();
    const breakpointForFetch = $(document).height() - 100;

    if (window.scrollY + window.innerHeight > document.body.clientHeight - 100) {
      this.setState( { page: this.state.page + 1 },
      this.getAdditionalPhotos );
    }
  }

  getAdditionalPhotos() {
    this.props.getPhotosByGrid(this.state.page)
  }

  render() {
    return (
      <article className='explore-container'>
        <div className='explore'>
          <div className='explore-title'>Explore</div>
          <ul className='photo-grid'>
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
        </div>
      </article>
    )
  }
}

export default PhotoGrid;

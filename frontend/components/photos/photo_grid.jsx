import React from 'react';
import PhotoGridItem from './photo_grid_item';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
    $('html').scrollTop(0);
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

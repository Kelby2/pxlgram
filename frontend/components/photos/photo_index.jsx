import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item'

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getPhotos();
  }

  render() {
    if (this.props.photos.length > 1 && this.props.users.length > 1) {
    return (
      <div className='photo-stream-container'>
        <ul className='photo-stream'>
          {
            this.props.photos.map(photo => {
              return(
                <PhotoIndexItem
                  key={ photo.id }
                  photo={ photo }
                  user={ this.props.users[photo.author_id-1]}/>
              )
            })
          }
        </ul>
      </div>
    )} else {
      return null;
    }
  }
}

export default PhotoIndex;

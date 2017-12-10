import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import { BeatLoader } from 'react-spinners';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: true,
      photosFetched: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getPhotosByPage(this.state.page).then(
      () => { this.setState( { photosFetched: true } ) }
    );
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const nearBottom = (window.scrollY
                          + window.innerHeight
                          + 200 > document.body.clientHeight)
    if (nearBottom) {
      this.setState( { page: this.state.page + 1, loading: true },
      this.getAdditionalPhotos );
    }
  }

  getAdditionalPhotos() {
    this.props.getPhotosByPage(this.state.page);
  }

  render() {
    let loader = (
      <div className='loader'>
        <BeatLoader
          color={'#efefef'}
          loading={ this.state.loading }/>
      </div>
    )

    if (!this.state.photosFetched) {
      return null;
    }

    return (
      <div className='photo-stream-container'>
        <ul className='photo-stream'>
          {
            this.props.photos.map(photo => {
              return(
                <PhotoIndexItem
                  key={ photo.id }
                  photo={ photo } />
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default PhotoIndex;

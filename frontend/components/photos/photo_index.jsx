import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import HeaderContainer from '../header/header_container';
import { BeatLoader } from 'react-spinners';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      loading: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getPhotosByPage(this.state.page);
    this.props.getComments();
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const distanceFromTop = $(window).scrollTop();
    const breakpointForFetch = $(document).height() - 100;
    if (distanceFromTop + $(window).height() > breakpointForFetch) {
      this.setState( { page: this.state.page + 1 },
      this.getAdditionalPhotos)
    }
  }

  getAdditionalPhotos() {
    this.props.getPhotosByPage(this.state.page);
  }

  render() {
    let content = (
      <div className='loader'>
        <BeatLoader
          color={'#FF1100'}
          loading={ this.state.loading }/>
      </div>
    )

    return (
      <div className='photo-stream-container'>
        <ul className='photo-stream'>
          {
            this.props.photos.map(photo => {
              return(
                <PhotoIndexItem
                  key={ photo.id }
                  photo={ photo }
                  user={ this.props.users[photo.author_name]}/>
              )
            })
          }
        </ul>
        {content}
      </div>
    )
  }

}

export default PhotoIndex;

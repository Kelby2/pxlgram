import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import HeaderContainer from '../header/header_container';

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
    const breakpointForFetch = $(document).height() - 125;
    if (distanceFromTop + $(window).height() > breakpointForFetch) {
      this.setState( { page: this.state.page + 1 },
      this.props.getPhotosByPage(this.state.page) )
    }
  }

  render() {

    if (this.props.photos.length > 0 && Object.keys(this.props.users).length > 0) {

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
      </div>
    )} else {
      return null;
    }
  }
}

export default PhotoIndex;

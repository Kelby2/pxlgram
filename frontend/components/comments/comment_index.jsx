import React from 'react';
import { Link } from 'react-router-dom';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.getPhotoComments(this.props.photoId);
  }

  onProfileClick() {
    if (this.props.fromProfile) {
      event.preventDefault();
      this.props.closeModal();
    }
  }

  renderPhotoCaption() {
    const { photo } = this.props;

    if (photo.caption) {
      return (
        <li className='caption-container'>
          <span className='author-username'>
            <Link to={`/${photo.author_name}`} onClick={this.onProfileClick.bind(this)}>
              {photo.author_name}
            </Link>
          </span>
          <span className='caption'>
            {photo.caption}
          </span>
        </li>
      );
    }
  }

  render () {
    const { photo, comments, fromProfile, closeModal } = this.props;

    return (
      <div className='comments-container'>
        <ul
          id={`comment-list-${photo.id}`}
          className='photo-comments'>
          { this.renderPhotoCaption() }
          {
            comments.map(comment => {
              return (
                <CommentItem
                  closeModal={ closeModal }
                  fromProfile={ fromProfile }
                  key={ comment.id }
                  comment={ comment }
                  photoAuthor= { photo.author_name }
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default CommentIndex;

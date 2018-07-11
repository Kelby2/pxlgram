import React from 'react';
import { Link } from 'react-router-dom';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.getPhotoComments(this.props.photoId);
  }

  renderPhotoCaption() {
    const { photo } = this.props;

    if (photo.caption) {
      return (
        <li className='caption-container'>
          <span className='author-username'>
            <Link to={`/${photo.author_name}`}>
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
    return (
      <div className='comments-container'>
        <ul className='photo-comments'>
          { this.renderPhotoCaption() }
          {
            this.props.comments.map(comment => {
              return (
                <CommentItem
                  key={ comment.id }
                  comment={ comment }
                  photoAuthor= { this.props.photo.author_name }
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

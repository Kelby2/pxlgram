import React from 'react';
import { Link } from 'react-router-dom';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: ""
    };
  }

  componentDidMount() {
    this.props.getPhotoComments(this.props.photoId);
  }

  render () {
    let photoCaption;

    if (this.props.photo.caption) {
      photoCaption = (
        <li className='caption-container'>
          <span className='author-username'>
            <Link to={`/${this.props.photo.author_name}`}>
              {(this.props.photo.caption && this.props.photo.caption.length > 0) ? this.props.photo.author_name : null}
            </Link>
          </span>
          <span className='caption'>
            {this.props.photo.caption}
          </span>
        </li>
      );
    }

    return (
      <div className='comments-container'>
        <ul className='photo-comments'>
          { photoCaption }
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

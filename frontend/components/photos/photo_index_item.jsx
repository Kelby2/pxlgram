import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container'
import CommentIndexContainer from '../comments/comment_index_container'

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.photo = this.props.photo;
  }

  focusComment(id) {
    document.getElementById(id).focus();
  }

  render() {
    return (
      <li className='photo-post-container'>
        <div className='photo-post'>

          <article className='photo-author-info'>
            <div className='stream-avatar-container'>
              <Link to={`/${this.photo.author_name}`}>
                <img className='stream-avatar' src={this.photo.author_avatar} />
              </Link>
            </div>

            <div className='author-username'>
              <Link to={`${this.photo.author_name}`}>
                 <div className='stream-username'>
                   {this.photo.author_name}
                </div>
              </Link>
            </div>
          </article>

          <article className='photo-container'>
            <img className='photo' src={this.photo.imageUrl} />
          </article>

          <article className='photo-info-container'>
            <div className='icon-container'>
              <LikeContainer photo_id={this.photo.id} />
              <div
                className='fa fa-comment-o fa-lg comments-icon'
                onClick={ () => this.focusComment(this.photo.id) }>
              </div>
            </div>

            <div className='like-count'>
              {this.photo.likers.length} {(this.photo.likers.length === 1) ? 'like' : 'likes'}
            </div>

            <div className='caption-container'>
              <span className='author-username'>
                <Link to={`${this.photo.author_name}`}>
                  {(this.photo.caption && this.photo.caption.length > 0) ? this.photo.author_name : ""}
                </Link>
              </span>
              <span className='caption'>
                {this.photo.caption}
              </span>
            </div>

            <div className='comments-container'>
              <CommentIndexContainer photo_id={this.photo.id} />
            </div>
          </article>

        </div>
      </li>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.photo.author_name]

  return ({
    user
  })
}

export default connect(mapStateToProps)(PhotoIndexItem);

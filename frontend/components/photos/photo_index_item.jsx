import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentForm from '../comments/comment_form';
import TimeStamp from './photo_time_stamp'

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

            <CommentIndexContainer photoId={this.photo.id} />
            <TimeStamp creationTime={this.photo.created_at} />
            <CommentForm id={this.photo.id} photo={ this.photo } />
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

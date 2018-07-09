import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentForm from '../comments/comment_form';
import TimeStamp from './photo_time_stamp';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
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
              <Link to={`/${this.props.photo.author_name}`}>
                <img className='stream-avatar' src={this.props.photo.author_avatar} />
              </Link>
            </div>

            <div className='author-username'>
              <Link to={`${this.props.photo.author_name}`}>
                 <div className='stream-username'>
                   {this.props.photo.author_name}
                </div>
              </Link>
            </div>
          </article>

          <article className='photo-container'>
            <img className='photo' src={this.props.photo.imageUrl} />
          </article>

          <article className='photo-info-container'>
            <div className='icon-container'>
              <LikeContainer photo_id={this.props.photo.id} />
              <div
                className='fa fa-comment-o fa-lg comments-icon'
                onClick={ () => this.focusComment(this.props.photo.id) }>
              </div>
            </div>

            <div className='like-count'>
              {this.props.photo.likers.length} {(this.props.photo.likers.length === 1) ? 'like' : 'likes'}
            </div>

            <CommentIndexContainer photoId={this.props.photo.id} />
            <TimeStamp photoCreationTime={this.props.photo.created_at} />
            <CommentForm id={this.props.photo.id} photo={ this.props.photo } />
          </article>

        </div>
      </li>
    );
  }
};

export default PhotoIndexItem;

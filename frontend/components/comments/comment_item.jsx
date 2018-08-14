import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  onProfileClick() {
    const { fromProfile, closeModal, photoAuthor, comment } = this.props;

    if (fromProfile && photoAuthor === comment.author_name) {
      closeModal();
    }
  }

  renderDeleteCommentButton() {
    if (this.props.hasDeleteAccess) {
      return (
        <div
          className="fa fa-times"
          id="delete-comment-button"
          onClick={ this.handleDelete }>
        </div>
      );
    }
  }

  render() {
    return (
      <li className='comment'>
        <Link to={`/${this.props.comment.author_name}`} onClick={this.onProfileClick.bind(this)}>
          <span className='comment-author'>{this.props.comment.author_name}</span>
        </Link>
        {this.renderDeleteCommentButton()}
        <span className='comment-body'>{this.props.comment.body}</span>
      </li>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser.username;
  const hasDeleteAccess = ownProps.comment.author_name === currentUser
    || ownProps.photoAuthor === currentUser
    || currentUser === 'admin';

  return {
    currentUser,
    hasDeleteAccess,
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteComment: comment_id => dispatch(deleteComment(comment_id)),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)
                        (CommentItem);

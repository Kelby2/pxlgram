import React from 'react';
import { addComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentBody: "",
      photo_id: this.props.photo.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateCommentScroll() {
    const commentList = $('.photo-comments');
    commentList.animate({ scrollTop: commentList.prop('scrollHeight')}, 2000);
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = this.state;
    this.props.addComment(comment).then(() => {
        this.setState( { commentBody: "" } );
        this.updateCommentScroll();
      }
    );
  }

  handleInputChange() {
    return (e) => {
      this.setState({ commentBody: e.target.value });
    };
  }

  render() {
    return (
      <div className='comment-form-container'>
        <form
          className='form'
          onSubmit={this.handleSubmit}>
          <input
            id={this.props.photo.id}
            type='textarea'
            value={this.state.commentBody}
            className='add-comment-input'
            onChange={this.handleInputChange('commentBody')}
            placeholder='Add a comment...'
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    addComment: comment => dispatch(addComment(comment)),
  });
};

export default connect(null, mapDispatchToProps)(CommentForm);

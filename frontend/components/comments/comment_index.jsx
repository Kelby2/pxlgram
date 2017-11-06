import React from 'react';
import CommentItem from './comment_item'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: this.props.photo_id,
      commentBody: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = this.state
    this.props.addComment(comment).then(() => this.setState({
      commentBody: ""
    }));
  }

  componentDidMount() {
    this.props.getPhotoComments(this.props.photo_id)
  }

  handleInputChange(formField) {
    return (e) => {
      this.setState({ [formField]: e.target.value });
    };
  }

  render () {
    
    return (
      <article>
        <div className='photo-comments'>
          <ul>
            {
              this.props.comments.map(comment => {
                return (
                  <CommentItem
                    key={ comment.id }
                    comment={ comment }
                    user={ this.props.users[comment.user_id] }/>
                )
              })
            }
          </ul>
        </div>

        <div className='comment-form'>
          <form
            className='form'
            onSubmit={this.handleSubmit}>
            <input
              id={this.props.photo.id}
              type='text'
              value={this.state.commentBody}
              className='add-comment-form'
              onChange={this.handleInputChange('commentBody')}
              placeholder='Add a comment...'
            />
          </form>
        </div>
      </article>
    )
  }
}

export default Comment;

import React from 'react';
import CommentItem from './comment_item'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = this.state
    this.props.addComment(this.props.photo_id);
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
                    comment={ comment } />
                )
              })
            }
          </ul>
        </div>
          <input
            type='text'
            className='add-comment-form'
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange('commentBody')}
            placeholder='Add a comment...'
          />
      </article>
    )
  }
}

export default Comment;

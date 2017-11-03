import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

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
          Construction
        </div>
        <textarea
          className='add-comment-form'
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange('commentBody')}
        />
      </article>
    )
  }
}

export default Comment;

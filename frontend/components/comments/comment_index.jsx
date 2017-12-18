import React from 'react';
import CommentItem from './comment_item'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: "",
      photo_id: this.props.photo.id,
    }
  }

  componentDidMount() {
    this.props.getPhotoComments(this.props.photoId)
  }

  render () {
    return (
      <ul className='photo-comments'>
        {
          this.props.comments.map(comment => {
            return (
              <CommentItem
                key={ comment.id }
                comment={ comment }
              />
            )
          })
        }
      </ul>
    )
  }
}

export default CommentIndex;

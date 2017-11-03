import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    const like_state = this.props.photo.likerIds
                        .includes(this.props.currentUser.id)
    this.state = {
      like_state
    }
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(event) {
    if (this.state.like_state) {
      debugger
      this.props.deleteLike()
    } else {
      this.props.addLike(this.props.photo_id)
    }
  }

  render () {

    if (this.state.like_state) {
      return (
        <div
          onClick={this.handleLike}
          className='fa fa-heart fa-lg liked-icon'
        />
      )
    } else {
      return (
        <div
          onClick={this.handleLike}
          className='fa fa-heart-o fa-lg likes-icon'
        />
      );
    }
  }
}

export default Like;

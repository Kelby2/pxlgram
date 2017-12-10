import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like_state: this.props.photo.likers
                        .includes(this.props.currentUser.username)
    }
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.photo.likers.length !== this.props.photo.likers.length) {
      this.setState({ like_state: !this.state.like_state })
    }
  }

  handleLike(event) {
    if (this.state.like_state) {
      this.props.deleteLike(this.props.photo_id)
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

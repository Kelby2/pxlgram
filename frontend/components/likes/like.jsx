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

  componentWillReceiveProps(nextProps) {
    if (nextProps.photo.likerIds.length > this.props.photo.likerIds.length) {
      this.setState({ like_state: !this.state.like_state })
    }

  }

  handleLike(event) {
    if (this.state.like_state) {
      debugger
      this.props.deleteLike()
    } else {
      this.props.addLike(this.props.id)
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

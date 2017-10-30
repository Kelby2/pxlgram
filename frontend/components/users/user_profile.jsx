import React from 'react';
import { Link } from 'react-router-dom';;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentWillMount() {
    this.props.getUser(this.props.user)
  }

  render () {
    return (
      <main className='user-profile-container'>
        <div className='user-profile'>

        </div>
      </main>
    )
  }
}

export default UserProfile;

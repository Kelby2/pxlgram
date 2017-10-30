import React from 'react';
import { Link } from 'react-router-dom';;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id)
  }

  render () {

    const user = this.props.user

    if (!user) {
      return null;
    } else {
      return (
        <main className='user-profile-container'>
          <div className='user-profile'>
            <h2 className='test'>under construction</h2>
          </div>
        </main>
      )
    };
  }
}

export default UserProfile;

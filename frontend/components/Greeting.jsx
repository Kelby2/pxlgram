import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1> Welcome, {this.props.currentUser.username }!</h1>
          <form>
            <input
              className='searchUsers'
              type='text'
              placeholder='Search' />

          </form>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }

}

export default Greeting;

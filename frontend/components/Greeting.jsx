import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.currentUser) {
      return (
        <article className='fixed-header'>
          <div className='header-bar'>
            <div className='pxlgLogo'>logo</div>

            <div className='user-search-bar'>

              <i class="icon-search"></i>
              <span className='searchText'>Search</span>

            </div>


            <div className='nav-bar'>
              <button onClick={() => this.props.logout()}>tempLogout</button>
              <button onClick={'/upload'}>add_photo</button>
              <button>all_photos</button>
              <button>current_user_profile</button>
            </div>
          </div>
        </article>
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

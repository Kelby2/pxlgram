import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSearchBar(event) {
    event.preventDefault();

  }

  goHome(event) {

  }

  render() {

    if (this.props.currentUser) {
      return (
        <article className='fixed-header'>
          <div className='header-bar'>

            <a href="/" className='logo-container'>
              <span className='logo-icon'>logo</span>
              <span className='logo'>pxlGram</span>
            </a>

            {/*<div onClick={this.toggleSearchBar} className='user-search-bar'>

              <icons className="fa fa-search"></icons>
              <span className='searchText'>Search</span>

            </div> */}
            

            <input className='user-search-bar'
                    type='text'
                    placeholder='Search' />


            <div className='nav-bar'>
              <icons className="fa fa-upload fa-lg"></icons>
              {/* <icons className="fa fa-compass fa-lg"></icons> */}
              <icons className="fa fa-heart fa-lg"></icons>
              <icons className="fa fa-user fa-lg"></icons>
            </div>

          </div>


          <button onClick={() => this.props.logout()}>tempLogout</button>
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

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
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

              <Link className="fa fa-upload fa-lg"
                to={'/upload'} />
              <Link className="fa fa-compass fa-lg"
                to={'/explore'} />
              <Link className= 'fa fa-user fa-lg'
                to={`/${this.props.currentUser.username}`} />
            </div>

          </div>

          <Link onClick={() => this.props.logout()} to={'/'}>tempLogout</Link>
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

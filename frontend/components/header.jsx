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
              <span className='logo-icon'>
                <img src={'http://is5.mzstatic.com/image/thumb/Purple117/v4/23/90/61/2390617c-b581-1b75-b0bb-f899350b6bba/source/175x175bb.jpg'}
                  alt='sourced from mzstatic.com'/>
              </span>
              <span className='logo'>pxlGram</span>
            </a>

            <input className='user-search-bar'
                    type='text'
                    placeholder='Search' />


            <div className='nav-bar'>

              <Link className="fa fa-upload fa-lg"
                to={'/upload'} id={this.props.currentUser.id}/>
              <Link className="fa fa-compass fa-lg"
                to={'/explore'} />
              <Link className='fa fa-user fa-lg'
                to={`/users/${this.props.currentUser.id}`} />
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

export default Header;

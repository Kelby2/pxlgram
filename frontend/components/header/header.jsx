import React from 'react';
import SearchBarContainer from '../search/search_bar_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleScroll(event) {
    const header = $(".fixed-header");
    const distanceFromTop = $(window).scrollTop()
    header.toggleClass("mini-header", distanceFromTop > 120);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {

    if (this.props.currentUser) {
      return (
        <article className='fixed-header'>
          <div className='header-bar'>

            <a href="#/" className='logo-container'>
              <span className='logo-icon'>
                <img src={'http://is5.mzstatic.com/image/thumb/Purple117/v4/23/90/61/2390617c-b581-1b75-b0bb-f899350b6bba/source/175x175bb.jpg'}
                  alt='Logo from mzstatic.com'/>
              </span>
              <span><div className='logo'>pxlGram</div></span>
            </a>

            <SearchBarContainer/>

            <div className="nav-bar">

              <Link className="fa fa-upload fa-lg"
                to={'/upload'} id={this.props.currentUser.id}/>
              <Link className="fa fa-compass fa-lg"
                to={'/'} />
              <Link className='fa fa-user fa-lg'
                to={`/${this.props.currentUser.username}`} />

            </div>

          </div>

          <div className="search-results-container">
            <ul className="search-results-list">
            </ul>
          </div>
        </article>
      );
    } else {
      return null;
    }
  }

}

export default Header;

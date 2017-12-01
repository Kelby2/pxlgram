import React from 'react';
import SearchBarContainer from '../search/search_bar_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.scrollUp = this.scrollUp.bind(this)
  }

  handleScroll(event) {
    const header = $(".fixed-header");
    const distanceFromTop = $(window).scrollTop()
    header.toggleClass("mini-header", distanceFromTop > 120);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  scrollUp(e) {
    setTimeout(() => window.scrollTo(0,0), 0);
  }

  render() {

    if (this.props.currentUser) {
      return (
        <article className='fixed-header'>
          <div className='header-bar'>

            <div className='logo-container'>
              <a href="#/" onClick={ this.scrollUp } className='logo-icon'>
                <img src={'https://is5.mzstatic.com/image/thumb/Purple117/v4/23/90/61/2390617c-b581-1b75-b0bb-f899350b6bba/source/175x175bb.jpg'}
                  alt='Logo from mzstatic.com'/>
              </a>

              <div>
                <a href="#/" onClick={ this.scrollUp } className='logo'>pxlGram</a>
              </div>
            </div>

            <SearchBarContainer/>

            <div className="nav-bar">

              <Link className="fa fa-upload fa-lg"
                to={'/upload'} id={this.props.currentUser.id}/>
              <Link className="fa fa-compass fa-lg"
                to={'/'} />
              <Link className='fa fa-user fa-lg'
                to={`/${this.props.currentUser.username}`} onClick={ this.scrollUp } />

            </div>

          </div>

        </article>
      );
    } else {
      return null;
    }
  }

}

export default Header;

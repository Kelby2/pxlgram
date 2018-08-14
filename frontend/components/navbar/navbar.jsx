import React from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from './search/search_bar_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  handleScroll = () => {
    const header = $(".fixed-header");
    const distanceFromTop = window.scrollY;
    header.toggleClass("mini-header", distanceFromTop > 20);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollUp() {
    setTimeout(() => window.scrollTo(0,0), 0);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <article className='fixed-header'>
          <div className='header-bar'>
            <div className='logo-container'>
              <a href="#/" onClick={this.scrollUp} className='logo-icon'>
                <div></div>
              </a>
              <div>
                <a href="#/" onClick={this.scrollUp} className='logo'>pxlGram</a>
              </div>
            </div>

            <SearchBarContainer/>

            <div className="nav-bar">
              <Link className='fa fa-info-circle fa-lg'
                to={'/kelbylu'}/>
              <Link className="fa fa-upload fa-lg"
                to={'/upload'}/>
              <Link className="fa fa-compass fa-lg"
                to={'/explore'} />
              <Link className='fa fa-user fa-lg'
                to={`/${this.props.currentUser.username}`} onClick={this.scrollUp} />
            </div>
          </div>
        </article>
      );
    }
  }
}

const mapStateToProps = state => (
  { currentUser: state.session.currentUser }
);

export default connect(mapStateToProps, null)(NavBar);

import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStateToProps,
                      null)(Header);

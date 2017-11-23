import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStateToProps,
                      null)(Header);

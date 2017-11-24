import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './search_bar';

const mapDispatchToProps = dispatch => {
  return ({
    searchUsers: (query) => dispatch(searchUsers(query)),
  })
}

export default withRouter(connect(null, mapDispatchToProps)(Searchbar));

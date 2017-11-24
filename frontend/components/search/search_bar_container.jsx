import { connect } from 'react-redux';
import Searchbar from './search_bar';

const mapDispatchToProps = dispatch => {
  return ({
    searchUsers: (query) => dispatch(searchUsers(query)),
  })
}

export default connect(null, mapDispatchToProps)(Searchbar);

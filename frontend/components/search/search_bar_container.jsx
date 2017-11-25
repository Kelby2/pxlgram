import { connect } from 'react-redux';
import Searchbar from './search_bar';
import { searchUsers } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => {
  return ({
    searchUsers: (query) => dispatch(searchUsers(query)),
  })
}

export default connect(null, mapDispatchToProps)(Searchbar);

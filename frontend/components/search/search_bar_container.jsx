import { connect } from 'react-redux';
import Searchbar from './search_bar';
import { searchUsers, clearSearch } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    const searchResults = state.ui.searchResults;
    return ({
      searchResults,
    })
}

const mapDispatchToProps = dispatch => {
  return ({
    searchUsers: (searchQuery) => dispatch(searchUsers(searchQuery)),
    clearSearch: () => dispatch(clearSearch()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
                            (Searchbar);

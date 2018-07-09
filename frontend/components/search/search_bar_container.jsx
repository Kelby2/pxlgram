import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './search_bar';
import { searchUsers, clearSearch } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    const searchResults = state.ui.searchResults;
    const pathURL = ownProps.location.pathname;
  
    return ({
      searchResults,
      pathURL,
    });
};

const mapDispatchToProps = dispatch => {
  return ({
    searchUsers: (searchQuery) => dispatch(searchUsers(searchQuery)),
    clearSearch: () => dispatch(clearSearch()),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
                            (Searchbar));

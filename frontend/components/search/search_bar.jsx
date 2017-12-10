import React from 'react';
import SearchResultsIndexItem from './search_result_index_item'

const SEARCH_DELAY = 750;
const SHOW_DROPDOWN_DELAY = 120;

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameQuery: "",
      showResults: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.searchUsers = this.props.searchUsers.bind(this);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this._toggleShowResults = this._toggleShowResults.bind(this);
  }

  //Clear the search bar if we move to a different page, update pathURL
  componentWillReceiveProps(newProps) {
    if (this.props.pathURL !== newProps.location.pathname ) {
      this.setState( { usernameQuery: "" },
      () => this.props.clearSearch() );
    }
  }

  //Checks on every input to see if we should start a search to the database.
  //If the search bar is empty, we do not want to query the database and want
  //to clear our search results to null.
  handleInputChange(e) {
    e.preventDefault();
    const usernameQuery = e.currentTarget.value;
    this.setState( { usernameQuery } )

    if (usernameQuery.length > 0) {
      this._callSearch(usernameQuery)
    } else {
      this.props.clearSearch();
    }
  }

  //Blurs on escape key
  handleEsc(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      $('.user-search-bar').blur();
    }
  }

  //Highlights text in the search bar and activates display for results.
  handleFocus(e) {
    e.currentTarget.select()
    this._toggleShowResults();
  }

  // Hides display for results when we click away from the search bar.
  // Delay added so user can click on the search results and navigate
  // to user profile.
  handleBlur() {
    setTimeout(this._toggleShowResults, SHOW_DROPDOWN_DELAY);
  }

  // Debouncing search with setTimeout to limit the number of calls to
  // the database. If user makes another input within the delay, the
  // previous search is cleared and the delay restarts for a new search
  _callSearch(query) {
    clearTimeout(this.queueSearch);
    this.queueSearch = setTimeout(this.startSearch, SEARCH_DELAY);
  }

  // Dispatches search to the database with the query. As this was an
  // asynchronous call, we need to check that the current state is not
  // empty.
  startSearch() {
    if (this.state.usernameQuery.length > 0) {
      this.searchUsers(this.state.usernameQuery);
    }
  }

  _toggleShowResults() {
    this.setState( {showResults: !this.state.showResults} )
  }

  render() {
    const searchResults = this.props.searchResults;
    let resultsIndex;

    if (searchResults && this.state.showResults) {

      if (searchResults.length > 0) {
        resultsIndex = (
          <ul className="search-results-index">
            {
              searchResults.map(user => {
                return(
                  <SearchResultsIndexItem
                  key={ user.username }
                  user={ user }/>
                )
              })
            }
          </ul>
        )
      } else {
        resultsIndex = (
          <ul className="search-results-index">
            <li className="results-none">No Results Found.</li>
          </ul>
        )
      }
    }

    return (
      <div className="search-container">
        <input
          className="user-search-bar"
          type="search"
          placeholder="Search"
          value={ this.state.usernameQuery }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleInputChange }
          onKeyDown={ this.handleEsc }
        />
        {resultsIndex}

      </div>
    )
  }
}

export default Searchbar;

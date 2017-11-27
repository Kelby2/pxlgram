import React from 'react';
import debounce from 'debounce';
import SearchResultsIndexItem from './search_result_index_item'

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      active: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this._clearUsers = this._clearUsers.bind(this);
    this._toggleDropdown = this._toggleDropdown.bind(this);
    this.searchUsers = debounce(this.props.searchUsers, 1000);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState( {searchTerm: event.currentTarget.value } )
    const query = event.currentTarget.value;

    if (query.length > 0) {
      this.setState( { active: true } )
      this._callSearch(query)
    } else {
      this.setState( { active: false } );
      this._clearUsers();
    }
  }

  handleFocus(e) {
    e.currentTarget.select()
    this._toggleDropdown();
  }

  handleBlur() {
    setTimeout(this._toggleDropdown, 100);
  }

  _toggleDropdown() {
    this.setState( {active: !this.state.active} )
  }

  _callSearch(query) {
    this.searchUsers(query)
  }

  _clearUsers() {
    setTimeout(this.props.clearSearch, 1001);
  }

  render() {
    const searchResults = this.props.searchResults;
    let resultsIndex;

    if (this.state.searchTerm.length > 0 && searchResults && this.state.active) {

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
          value={ this.state.searchTerm }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleInputChange }
        />
        {resultsIndex}

      </div>
    )
  }
}

export default Searchbar;

import React from 'react';
import SearchResultsIndexItem from './search_result_index_item'

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      active: false,
      queue: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchUsers = this.props.searchUsers.bind(this);
    this.fire = this.fire.bind(this);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this._toggleDropdown = this._toggleDropdown.bind(this);
  }

  handleInputChange(event) {

    event.preventDefault();
    const query = event.currentTarget.value;
    if (event.currentTarget.value.length > 0) {
      this.setState( {searchTerm: event.currentTarget.value }, this._callSearch(query) )
    } else {
      this.setState( {searchTerm: event.currentTarget.value});
      this.props.clearSearch();
    }

  }

  handleFocus(e) {
    e.currentTarget.select()
    this._toggleDropdown();
  }

  handleBlur() {
    setTimeout(this._toggleDropdown, 120);
  }

  _toggleDropdown() {
    this.setState( {active: !this.state.active} )
  }

  _callSearch(query) {

    if (!this.state.queue) {
      this.setState( {queue: true },
        () =>
        this.what = window.setTimeout(this.fire, 750)
      )
    } else {
      window.clearTimeout(this.what);
      this.what = window.setTimeout(this.fire, 750);
    }
  }

  fire() {
    if (this.state.searchTerm.length > 0) {
      this.searchUsers(this.state.searchTerm);
    }
    this.setState({queue: false})
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

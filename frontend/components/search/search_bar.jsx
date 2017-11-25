import React from 'react';
import debounce from 'debounce';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchUsers = debounce(this.props.searchUsers, 1500);
  }

  handleInputChange(e) {
    this.setState( { searchTerm: e.currentTarget.value })
    this.callSearch(e);
  }

  callSearch(e) {
    if (e.currentTarget.value.length > 0) {
      this.searchUsers(e.currentTarget.value);
    }
  }

  handleFocus(e) {
    e.target.select()
  }

  render() {
    return (
      <input
        className="user-search-bar"
        type="search"
        placeholder="Search"
        value={ this.state.searchTerm }
        onFocus={ this.handleFocus }
        onChange={ this.handleInputChange }
      />
    )
  }
}

export default Searchbar;

import React from 'react';
import debounce from 'debounce';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value })
    this.props.searchUsers(this.state.searchTerm)
  }

  render() {
    return (
      <input
        className="user-search-bar"
        type="search"
        placeholder="Search"
        value={ this.state.searchTerm }
        onChange={ this.handleInputChange }
      />
    )
  }
}

export default Searchbar;

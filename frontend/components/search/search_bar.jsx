import React from 'react';
import debounce from 'debounce';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchUsers = debounce(this.props.searchUsers, 1500);
  }

  handleInputChange(e) {
    if (e.currentTarget.value.length > 0) {
      this.searchUsers(e.currentTarget.value);
    }
  }

  render() {
    return (
      <input
        className="user-search-bar"
        type="text"
        placeholder="Search"
        onChange={ this.handleInputChange }
      />
    )
  }
}

export default Searchbar;

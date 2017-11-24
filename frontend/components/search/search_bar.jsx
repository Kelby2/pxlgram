import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    
  }

  render() {
    return (
      <input
        className="user-search-bar"
        type="text"
        placeholder="Search"
        onChange={ this.handleSearch }
      />
    )
  }
}

export default Searchbar;

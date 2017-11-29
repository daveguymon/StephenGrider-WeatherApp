import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondar">Submit</button>
        </span>
      </div>
    );
  }
}

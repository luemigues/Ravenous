import React from 'react';
import './app.css';
import BusinessList from '../businessList/businessList.js';
import SearchBar from '../searchBar/searchBar.js';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;

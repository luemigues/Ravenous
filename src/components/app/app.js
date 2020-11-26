import React from 'react';
import './app.css';
import BusinessList from '../businessList/businessList.js';
import SearchBar from '../searchBar/searchBar.js';
import Yelp from '../../util/yelp.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy)
    .then( businesses => {
      this.setState({businesses: businesses})
    })
  }

  render() {

    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;

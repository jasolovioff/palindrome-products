import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResult from './components/SearchResult';

class App extends Component {
    render () {
    return (
      <div className='wrapper'>
          <div>
              <Header />
              <SearchResult />
          </div>
      </div>
    )}
}

export default App;

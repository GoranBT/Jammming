import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constractor(props){
    super(props);
    this.state = {
      searchResults: [{
        'name': 'Zaba',
        'artist': 'Goran',
        'album': 'Tralala'
      },{
        'name': 'zaba1',
        'artist': 'Dush',
        'album': 'Bar'
      },{
        'name': 'bar',
        'artist': 'nik',
        'album': 'foo'
      }]
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

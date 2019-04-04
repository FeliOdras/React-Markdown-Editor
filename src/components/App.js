import React, { Component } from 'react';
import Logo from './Logo';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
      </div>
    );
  }
}

export default App;

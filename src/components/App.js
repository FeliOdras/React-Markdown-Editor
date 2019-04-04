import React, { Component } from 'react';
import Logo from './Logo';
import MarkdownEditor from './MarkdownEditor';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <MarkdownEditor />
        </header>
      </div>
    );
  }
}

export default App;

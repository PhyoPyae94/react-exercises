import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <LogoText/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
class LogoText extends Logo {
  render() {
    return (
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;

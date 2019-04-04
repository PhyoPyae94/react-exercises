import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.yourname = "Mg Mg";
    this.state = {
       
    }
  }
  
  calling(method) {
    return "Hello " + method;
  }

  render() {
    const title = 'Calling Function';
    return (
      <div className="App">
        <h2>First Title: {this.calling('react')} {1+1}</h2>
        {/* you cant call the other method without (this) keyword */}

        <h2>Second Title: {this.yourname}</h2>
      </div>
    );
  }
}

export default App;

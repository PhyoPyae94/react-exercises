import React, { Component } from 'react';
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
        <h2>{title}</h2>
        <h2>First Title: {this.calling('react')} {1+1}</h2>
        {/* you cant call the other method without (this) keyword */}

        <h2>Second Title: {this.yourname}</h2>
        <hr/>
        <Marvel msg="marvel's heros are cool" favHeros="Deadpool" coolHeros={this.props.heros}/>
      </div>
    );
  }
}

App.defaultProps = {
  heros: ['antman', 'ironman', 'dr.strange', 'spiderman']
}
class Marvel extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
          <h2>I'm a marvel fun.</h2>
          <p>{this.props.msg}</p>
          <p>{this.props.favHeros}</p>
          <p>{this.props.coolHeros.map((item, i) => {
            return " " + item;
          })}</p>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.yourname = "Mg Mg";
    this.state = {
      heros: ['s-antman', 's-ironman', 's-dr.strange', 's-spiderman']
    }
    this.handleClick = this.handleClick.bind(this);
    //bind-> using Javascript functions to manipulate that state
  }
  
  calling(method) {
    return "Hello " + method;
  }

  handleClick() {
    this.setState( {heros: this.state.heros.reverse()});
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
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Marvel msg="marvel's heros are cool" favHeros="Deadpool" coolHeros={this.state.heros}/>
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
          <div>{this.props.coolHeros.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}</div>
      </div>
    )
  }
}




export default App;

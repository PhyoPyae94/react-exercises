import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       r: 0
    }
    this.getRamdomNumber = this.getRamdomNumber.bind(this);
  }
    getRamdomNumber() {
      // console.log("ramdom no called");
      this.setState({r: Math.round(Math.random()*10)})
    }
  
    render() {
      return (
        <div>
            <h2>Title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo accusantium nobis ex doloribus consectetur dolorum distinctio consequuntur in dicta vel perspiciatis, minima, delectus adipisci fugiat corporis voluptatem eius culpa!</p>
            <br/>
            <h2>Component Life cycle</h2>
            <button onClick={this.getRamdomNumber}>Get Ramdom Number</button>
            <Numbers myNumber = {this.state.r}/>
        </div>
      );
    }
  }

class Numbers extends Component {
  render() {
    return (
      <div>
        <br/>
        {this.props.myNumber}
      </div>
    )
  }
}


export default Intro;
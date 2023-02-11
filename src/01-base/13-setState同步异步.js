import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      number: 1,
    }
  }

  btn1Clicked = () => {
    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state.number);

    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state.number);

    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state.number);
  }

  btn2Clicked = () => {
    setTimeout(() => {
      this.setState({
        number: this.state.number + 1
      })
      console.log(this.state.number);
  
      this.setState({
        number: this.state.number + 1
      })
      console.log(this.state.number);
  
      this.setState({
        number: this.state.number + 1
      })
      console.log(this.state.number);
    }, 1);
  }

  render() {
    return (
      <div>
        {this.state.number}
        <button style={{margin:"5px"}} onClick={this.btn1Clicked}>add1</button>
        <button style={{margin:"5px"}} onClick={this.btn2Clicked}>add2</button>
      </div>
    )
  } 
}

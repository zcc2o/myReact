import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input/>
        <button onClick={ this.btn1Method}>按钮1</button>
        <button onClick={ this.btn2Method.bind(this)}>按钮2</button>
        <button onClick={ () => this.btn3Method()}>按钮3</button>
        <button onClick={ () => {
          console.log('按钮4', this)
        }}>按钮4</button>
      </div>
    )
  }

  btn1Method() {
    console.log('按钮1');
    console.log(this);
  }

  btn2Method = () => {
    console.log('按钮2',this);
  }

  btn3Method() {
    console.log('按钮3',this);
  }

}

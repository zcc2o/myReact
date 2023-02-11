import React, { Component } from 'react'

export default class App extends Component {

  a = 100;

  render() {
    return (
      <div>
        <input/>
        <button onClick={ this.btn1Method.bind(this)}>按钮1</button>
        <button onClick={ this.btn2Method}>按钮2</button>
        <button onClick={ () => this.btn3Method()}>按钮3</button>
        <button onClick={ () => {
          console.log('按钮4', this.a) 
        }}>按钮4</button>
      </div>
    )
  }

  btn1Method() {
    console.log('按钮1');
    console.log(this.a);
  }

  btn2Method = (evt) => {
    console.log('按钮2',this.a, evt);
  }

  btn3Method() {
    console.log('按钮3',this.a);
  }
}

var obj1 = {
  name:'obj1',
  getName() {
    console.log(this.name);
  }
}

var obj2 = {
  name:'obj2',
  getName() {
    console.log(this.name);
  }
}

/**
 * call, 改变this， 自动执行函数
 * apply, 改变this， 自动执行函数
 * bind, 改变this， 不自动执行函数，执行需要手动添加()
 */

// obj1.getName()
// obj2.getName()

// obj1.getName.bind(obj2);
// obj1.getName.bind(obj2)();
obj1.getName.apply(obj2)
// obj1.getName.call(obj2)
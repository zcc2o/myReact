import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    list: ["111", "222", "3333"]
  }

  render() {
    var showList = this.state.list.map(item=><li key={item}>{item}</li>)
    return (
      <div>
        {
          // this.state.list.map(item=><li key={item}>{item}</li>)
          showList 
        }
      </div>
    )
  }
}



var list1 = ['111', '222', '33333'];
var newList = list1.map(item=>'<li>'+item+'</li>');
newList.join("");
console.log(newList);
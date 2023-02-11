import React, { Component } from 'react'

export default class App extends Component {

  // state = {
  //   isCollect: false
  // }

  constructor() {
    super();
    this.state = {
      isCollect: false
    }
  }

  render() {
    return (
      <div>
        
        <h1>Reac2学习</h1>

        <button onClick={this.btnClicked}>
        {
          this.state.isCollect ? '取消收藏' : '收藏'

        }
        </button>
      </div>
    )
  }

  btnClicked = () => {
    console.log('btnClicked');
    this.setState({
      isCollect: !this.state.isCollect,
    })
  }
}

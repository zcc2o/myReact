import React, { Component } from 'react'
import './css/01-index.css'
export default class App4 extends Component {
  render() {

    var name = 'zcc'
    var fontStyle = {background:'blue', color:'white', fontSize:'30px'}
    return (
      <div>
        {10+20}-{name}
        <hr/>
        {10 > 20 ? '10大' : '20大'}
        <div style={fontStyle}>111111</div>
        <div style={{background:"yellow"}}>2222222</div>
        <div className='fontStyle'>333333</div>
        <div id='fontStyle2'>4444444</div>
      </div>
    )
  }
}

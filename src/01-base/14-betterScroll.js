import React, { Component } from 'react'
import BetterScroll from 'better-scroll';
export default class App extends Component {
  state = {
    list:[]
  }
  btnClicked = () => {
    let newList = []
    for (let index = 0; index < 200; index++) {
      newList.push(index);
    }
    this.setState({list:newList}, ()=>{
      new BetterScroll('.Scroller')
    });
    
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClicked}>创建内容</button>
        <div className='Scroller' style={{height:'200px', backgroundColor:'pink', overflow:'hidden'}}>
          <div className='container'>
            {
              this.state.list.map(item=><li key={item}>{item}</li>)
            }
          </div>  
        </div>
      </div>
    )
  }
}

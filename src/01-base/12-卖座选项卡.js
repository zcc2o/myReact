import React, { Component } from 'react'
import "./css/02-maizuo.css"
import Film from './sellseatcomponent/Film';
import Center from './sellseatcomponent/Center';
import Cinema from './sellseatcomponent/Cinema';

export default class App extends Component {

  state = {
    tabList: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
    currentIndex: 1
  }

  clickedTab(index) {
    console.log(index);
    // this.state.currentIndex = evt
    this.setState({currentIndex: index});
  }

  whichTabPage() {
    switch (this.state.currentIndex) {
      case 1:
        return <Film></Film>
      case 2: 
        return <Cinema></Cinema>
      case 3:
        return <Center></Center>
      default: 
        return <Film></Film>
    }
  }

  render() {
    return (
      <div>
        {
          this.whichTabPage()
        }
        <ul>
        {
          this.state.tabList.map((item)=>
            <li className={this.state.currentIndex === item.id ? 'active': ''} key={item.id} onClick={() => this.clickedTab(item.id)}>
              {item.text}
            </li>)
        }
        </ul>
        
      </div>
    )
  }
}

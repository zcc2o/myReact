import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class App extends Component {
  
  constructor(){
    super()

    // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5083409").then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // });

    this.state = {
      cinemaList:[],
      cinemaFilterList:[],
    }


    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5083409",
      method:"get",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16758502765799258116587521","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    
    }).then(res=>{
      console.log(res.data);
      this.setState({
        cinemaList:res.data.data.cinemas,
        cinemaFilterList:res.data.data.cinemas
      },()=>{
        new BetterScroll('.Scroller')
      })
      
    });

  }

//   X-Client-Info: {"a":"3000","ch":"1002","v":"5.2.1","e":"16758502765799258116587521","bc":"110100"}
//   X-Host: mall.film-ticket.cinema.list

  inputText(evt) {
    console.log(evt.target.value);

    let newList = this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(evt.target.value.toUpperCase()) || item.address.toUpperCase().includes(evt.target.value.toUpperCase()));
    this.setState({cinemaFilterList:newList});
  }

  render() {
    return (
      <div>
        <input onInput={this.inputText.bind(this)}></input>
        <div className='Scroller' style={{background:'pink', height:'600px', overflow:'hidden'}}>
          <div className='container'>
            {
              this.state.cinemaFilterList.map(item=>
              <dl>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>)
            }
          </div>
        </div>
      </div>
    )
  }
}

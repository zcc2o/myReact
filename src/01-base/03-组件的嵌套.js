import { render } from '@testing-library/react'
import React, { Component } from 'react'

function SubTitle () {
  return <div>
    subTitle
  </div>
}

class TitleBar extends Component {
  render() {
    return <div>
      TitleBar
      <SubTitle></SubTitle>
    </div>
  }
}

function Swiper() {
  return <div>
    swiper
  </div>
}

const Tabbar = ()=><div>tabbar</div>

export default class App3 extends Component {
  render() {
    return (
      <div>
        <TitleBar></TitleBar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

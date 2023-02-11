import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  
  state = {
    list: ["111", "222", "3333"]
  }

  inputRef = React.createRef();

  addClicked = () => {
    // 深拷贝
    let newList = [...this.state.list];
    newList.push(this.inputRef.current.value);

    // 这个方式也能深拷贝
    let newList2 = this.state.list.slice();
    newList2.push(this.inputRef.current.value);
    
    this.setState({
      // list: this.state.list.push(this.inputRef.current.value)
      list: newList2
    }) 
    console.log('添加',this.inputRef.current.value, this.state.list);
    this.inputRef.current.value = '';
  }

  delClicked(index) {
    console.log('删除第', index, '个');

    let newList = this.state.list.slice();
    /// 从第几个位置开始 删除 第二个参数表示删除的字符长度
    newList.splice(index, 1);

    console.log(newList);

    this.setState({
      list: newList
    })
  }

  render() {
    var showList = this.state.list.map((item, index)=><li key={index}>{index}:{item}</li>)
    return (
      <div>
        <input ref={this.inputRef}/>
        <button onClick={() => {
          this.addClicked()
        }}>添加</button>
        {

          // this.state.list.map(item=><li key={item}>{item}</li>)
          // showList 
          this.state.list.map((item, index)=><li key={index}>
            {index}:<div dangerouslySetInnerHTML={
              {
                __html:item
              }
            }></div> <button onClick={()=>this.delClicked(index)}>del</button>
          </li>)
        }
        {
          // (!this.state.list || this.state.list.length === 0) ? <div>暂无代办事项</div>:null
          // (!this.state.list || this.state.list.length === 0) && <div>暂无代办事项</div>
          
        }
        <div className={(!this.state.list || this.state.list.length === 0) ? '': 'hidden'}>暂无代办事项</div>

      </div>
    )
  }
}

var list1 = ['111', '222', '33333'];
var newList = list1.map(item=>'<li>'+item+'</li>');
newList.join("");
console.log(newList);
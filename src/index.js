// console.log('hello world')

import React from "react";
// import { ReactDOM } from "react";
import { createRoot } from 'react-dom/client';
// import App from "./01-base/01-类组件";

// import App2 from "./01-base/02-函数式组件";
// import App3 from "./01-base/03-组件的嵌套";
// import App4 from "./01-base/04-组件的样式";
// import App from "./01-base/05-事件的绑定-1";
// import App from "./01-base/06-事件的绑定-2";
// import App from "./01-base/07-ref";
// import App from "./01-base/08-state";
// import App from "./01-base/09-循环渲染";
// import App from "./01-base/10-todolist";
// import App from "./01-base/11-dangerouslySetInnerHTML";
// import App from "./01-base/12-卖座选项卡";
// import App from "./01-base/13-setState同步异步";
// import App from "./01-base/14-betterScroll";
// import App from "./01-base/15-betterScroll-cinema";
import App from "./01-base/16-props";

// ReactDOM.createRoot(<div>
//   <b>111</b>
// </div>, document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(<App2/>)
// root.render(<App3></App3>)
// root.render(<App4></App4>)
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
// ReactDOM.render(<App></App>, document.getElementById("root"))
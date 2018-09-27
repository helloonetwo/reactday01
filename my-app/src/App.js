//引入React，Component
import React, { Component } from 'react';

//组件继承component
class App extends Component {
  constructor() {
    super();
    this.state={
      day:'sunday'
    }
  }
  change(e) {
    console.log(e.target.value);
    //赋值，将input 的值赋给this.state.day
    this.state.day=e.target.value;
    //通知视图更新
    this.setState({

    })
  }
  render() {
    return (
      //保证一个跟节点
      <div>
          hello  world
          <br></br>
         {this.state.day}
           <br></br>
          <input type="text"  value={this.state.day}  onChange={  (e)=>{this.change(e)}  }/>
      </div>
    );
  }
}

export default App;

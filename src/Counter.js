import React, { Component } from "react";

class Counter extends Component {
  state = {
    //상태 관리:state사용
    counter: 0,
    fixed: 1,
  };
  handleIncrease = () => {
    this.setState((state) => ({
      //상태 업데이트 : this.setState 함수 사용
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1, //함수형 업데이트로 처리해주면 값이 2씩 더해짐
    }));
  };
  handleDecrease = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}
export default Counter;

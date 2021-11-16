import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}
Hello.defaultProps = {
  name: "이름 없음",
};

export default Hello;

//클래스형 컴포넌트 (잘 쓰지는 않음)
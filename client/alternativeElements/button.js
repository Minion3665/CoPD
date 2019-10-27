import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldWidth: props.width,
      oldOnClick: props.onClick,
      width: props.visible ? (props.width ? props.width : "400px") : "0",
      onClick: props.onClick,
      visible: props.visible
    }
    if (props.returnfunctions) {
      props.returnfunctions({show: (this) => {this.show}, hide: (this) => {this.hide}})
    }
  }
  show(that) {
    that.setState({visible: true, width: that.state.oldWidth ? that.state.oldWidth : "400px", onClick: that.state.oldOnClick});
  }
  hide(that) {
    that.setState({width: "0", onClick: () => {}});
    window.setTimeout(() => {
      that.setState({visible: false});
    }, 1000);
  }
  render() {
    if (this.state.visible) {
      return (
        <React.Fragment>
          <button style={{width: this.state.width}} onClick={() => {
            this.state.onClick();
            this.hide(this);
          }}>
            {this.props.children}
          </button>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Button;

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
      props.returnfunctions({show: this.show, hide: this.hide})
    }
  }
  show() {
    this.setState({visible: true, width: this.state.width ? this.state.width : "400px", onClick: this.state.oldOnClick});
  }
  hide() {
    this.setState({width: "0", onClick: () => {}});
    window.setTimeout(() => {
      this.setState({visible: false});
    }, 1000);
  }
  render() {
    if (this.state.visible) {
      return (
        <React.Fragment>
          <button style={{width: this.state.width}} onClick={() => {
            this.state.onClick();
            this.hide();
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

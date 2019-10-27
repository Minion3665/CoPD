import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.visible ? (props.width ? props.width : "400px") : "0",
      onClick: props.onClick,
      visible: props.visible
    }
    if (props.returnfunctions) {
      props.returnfunctions({show: this.show, hide: this.hide})
    }
  }
  show() {
    let width = this.props.width ? this.props.width : "400px"
    this.setState({visible: true, width: width, onClick: this.props.onClick});
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

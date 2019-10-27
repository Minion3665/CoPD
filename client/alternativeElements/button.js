import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width ? props.width : "400px",
      onClick: props.onClick,
      visible: props.visible
    }
    if (props.returnfunctions) {
      props.returnfunctions({show: this.show, hide: this.hide})
    }
  }
  show() {
    this.setState({visible: true, width: this.props.width ? this.props.width : "400px", onClick: this.props.onClick});
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
            this.hide();
            this.state.onClick();
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

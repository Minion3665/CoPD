import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width ? props.width : "400px",
      onClick: props.onClick,
      visible: true
    }
  }
  render() {
    return (
      <React.Fragment>
        <button style={{width: this.state.width, display: visible ? "none" : "block"}} onClick={() => {
          this.setState({width: "0", onClick: () => {}});
          this.state.onClick();
        }}>
          {this.props.children}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;

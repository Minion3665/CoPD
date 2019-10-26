import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width ? props.width : "400px",
      onClick: props.onClick
    }
  }
  render() {
    return (
      <React.Fragment>
        <button style={{width: this.state.width}} onClick={() => {
          this.setState({width: "0"});
          this.state.onClick();
          this.setState({onClick: this.props.onClick, width: props.width ? props.width : "400px"});
        }}>
          {this.props.children}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button>
          {this.props.children}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;

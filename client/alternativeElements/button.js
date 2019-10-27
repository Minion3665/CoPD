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
      visible: props.visible,
      classes: "",
    }
    if (props.returnfunctions) {
      props.returnfunctions({show: () => {this.show(this)}, hide: () => {this.hide(this)}})
    }
  }
  show(that) {
    that.setState({visible: true, width: 0, onClick: that.state.oldOnClick, classes: "animatein"});
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
          <div className={"buttoncontainer"} style={{width: this.state.width}}>
            <button className={this.state.classes} onClick={() => {
              this.state.onClick();
              this.hide(this);
            }}>
              {this.props.children}
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Button;

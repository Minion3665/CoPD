import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./alternativeElements/button.js";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtonTwo: (that) => { that.show(that) },
      showButtonOne: (that) => { that.show(that) }
    };
  }
  render() {
    return (
      <React.Fragment>
        <Button returnfunctions={(functions) => {
          this.setState({showButtonOne: functions.show});
        }} onClick={(that) => {
          setTimeout(() => {
            this.state.showButtonTwo();
          }, 1000);
        }} visible={true}>
          Example Button
        </Button>
        <Button returnfunctions={(functions) => {
          this.setState({showButtonTwo: functions.show});
        }} onClick={(that) => {
          setTimeout(() => {
            this.state.showButtonOne();
          }, 1000);
        }} visible={false}>
          Another Example Button
        </Button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

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
      showButtonTwo: () => {}
    };
  }
  render() {
    return (
      <React.Fragment>
        <Button onClick={() => {
          this.state.showButtonTwo();
        }} visible={true}>
          Example Button
        </Button>
        <Button returnfunctions={(functions) => {
          this.setState({showButtonTwo: functions.show});
        }} onClick={() => {
          alert("Example alert");
        }} visible={false}>
          Another Example Button
        </Button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

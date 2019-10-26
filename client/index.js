import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <button style={{
          backgroundColor: "#28c2ff",
          color: "#173753",
          width: "400px",
          height: "100px",
          boxShadow: "0 0 50px 15px #2191fb",
          borderRadius: "100px",
          maxWidth: "80vw",
          transition: "all 1s",
          overflow: "hidden",
          position: "relative",
          left: "50%",
          transform: "translate(-50%, 0)"
        }}>
          Example Button
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

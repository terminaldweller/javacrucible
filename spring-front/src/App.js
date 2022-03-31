import React from "react";
import Left from "./components/Left.js";
import Right from "./components/Right.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Left />
        <Right />
      </div>
    );
  }
}

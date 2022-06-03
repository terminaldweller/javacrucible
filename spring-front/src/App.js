import React from "react";
import Editor from "./components/Editor.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}

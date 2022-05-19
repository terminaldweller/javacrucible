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
        <img className="icon" src="save.png" width="20" height="20" />
        <img className="icon" src="load.jpg" width="20" height="20" />
        <img className="icon" src="delete.png" width="20" height="20" />
      </div>
    );
  }
}

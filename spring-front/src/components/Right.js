import React from "react";
import "../index.css";

export default class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div class="split right">
        <p class="markdown-placeholder">Parsed Markdown goes here!!!</p>
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/devibeans.css";
import markdown from "highlight.js/lib/languages/markdown.js";
import "../index.css";

hljs.registerLanguage("markdown", markdown);

class Code extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <pre id="highlight" aria-hidden="true">
        <code id="highlight-content" class="language-markdown"></code>
      </pre>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInput(event) {
    let text = this.state;
    let result_element = document.querySelector("#highlight-content");
    if (text[text.length - 1] == "\n") {
      text += " ";
    }
    result_element.innerHTML = text
      .toString()
      .replace(new RegExp("&", "g"), "&")
      .replace(new RegExp("<", "g"), "<");
    let pretty = hljs.highlight(this.state, { languages: "markdown" });
    console.log("ugly:", this.state);
    console.log("pretty:", pretty);
    let result_element_2 = document.querySelector("#highlight");
    result_element_2.scrollTop = event.currentTarget.scrollTop;
    result_element_2.scrollLeft = event.currentTarget.scrollLeft;
  }

  handleScroll(event) {
    let result_element = document.querySelector("#highlight");
    result_element.scrollTop = event.currentTarget.scrollTop;
    result_element.scrollLeft = event.currentTarget.scrollLeft;
  }

  handleKeyDown(event) {
    let element = event.currentTarget;
    let code = this.state;
    if (event.key == "Tab") {
      event.preventDefault();
      let before_tab = code.slice(0, element.selectionStart);
      let after_tab = code.slice(element.selectionEnd, element.value.length);
      let cursor_pos = element.selectionEnd + 1;
      element.value = before_tab + "\t" + after_tab;
      element.selectionStart = cursor_pos;
      element.selectionEnd = cursor_pos;
      this.handleInput(element.value, element);
    }
  }

  render() {
    return (
      <textarea
        spellcheck="false"
        name="editor"
        className="editor"
        id="editor"
        onInput={this.handleInput.bind(this)}
        onScroll={this.handleScroll.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
      ></textarea>
    );
  }
}

export default function Left() {
  return (
    <div>
      <Editor />
      <Code />
    </div>
  );
}

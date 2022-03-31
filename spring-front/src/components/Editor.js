import React from "react";
import ReactDOM from "react-dom";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/devibeans.css";
import markdown from "highlight.js/lib/languages/markdown.js";
import "../index.css";

hljs.registerLanguage("markdown", markdown);

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateCodeSyntaxHighlighting =
      this.updateCodeSyntaxHighlighting.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }

  updateCodeSyntaxHighlighting() {
    document.querySelectorAll("pre code").forEach((block) => {
      console.log("block:", block);
      console.log("blockt text:", block.textContent);
      hljs.highlightElement(block);
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInput(event) {
    let text = this.state.value;
    let result_element = document.getElementById("highlight-content");
    result_element.textContent = text;
    this.updateCodeSyntaxHighlighting();
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
    let code = this.state.value;
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
      <div>
        <div>
          <pre id="highlight" aria-hidden="true" direction="rtl">
            <code
              id="highlight-content"
              class="language-markdown"
              direction="rtl"
            ></code>
          </pre>
          <textarea
            spellcheck="false"
            name="editor"
            className="editor"
            id="editor"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onInput={this.handleInput.bind(this)}
            onScroll={this.handleScroll.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
            direction="rtl"
          ></textarea>
        </div>
        <div class="split right">
          <p class="markdown-placeholder">Parsed Markdown goes here!!!</p>
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import ReactDOM from "react-dom";
import hljs from "highlight.js/lib/core";
// const hljs = window.hljs;
import "highlight.js/styles/devibeans.css";
import markdown from "highlight.js/lib/languages/markdown.js";
import javascript from "highlight.js/lib/languages/javascript.js";
import python from "highlight.js/lib/languages/python.js";
import C from "highlight.js/lib/languages/c.js";
import bash from "highlight.js/lib/languages/bash.js";
import "../index.css";
import mit from "markdown-it";
import mithljs from "markdown-it-highlightjs";
import mittexmath from "markdown-it-texmath";
import mitmmdtable from "markdown-it-multimd-table";
import katex from "katex";

hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("c", C);
hljs.registerLanguage("bash", bash);

const md = new mit({ html: true })
  .enable(["table"])
  .use(mittexmath, {
    engine: katex,
    delimiters: "gitlab",
    katexOptions: { output: "mathml" },
  })
  .use(mitmmdtable)
  .use(mithljs, { inline: true, auto: true, code: true, hljs: hljs });

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateCodeSyntaxHighlighting =
      this.updateCodeSyntaxHighlighting.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.state = { value: "", drawerActive: false };
    // this.hljs_worker = new Worker("../highlight_worker.js");
    // this.md_worker = new Worker("../parse_worker.js");
  }

  // TODO-use web worker instead
  updateCodeSyntaxHighlighting() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
    // this.hljs_worker.postMessage("message");
    // this.hljs_worker.ouMessage = (event) => {
    //   console.log("highlighed successfully");
    // };
  }

  // TODO-use web worker instead
  parseMarkdown(event) {
    let element = document.getElementById("markdown-placeholder");
    let htm = md.render(event.target.value);
    element.innerHTML = htm;
    // this.md_worker.postMessage(event);
    // this.md_worker.onMessage((htm) => {
    //   element.innerHTML = htm;
    // });
  }

  handleChange(event) {
    // this.setState({ value: event.target.value });
  }

  handleInput(event) {
    let result_element = document.getElementById("highlight-content");
    result_element.textContent = event.target.value;
    this.updateCodeSyntaxHighlighting();
    this.parseMarkdown(event);

    result_element.scrollTop = event.currentTarget.scrollTop;
    result_element.scrollLeft = event.currentTarget.scrollLeft;
    let result_element_2 = document.querySelector("#highlight");
    result_element_2.scrollTop = event.currentTarget.scrollTop;
    result_element_2.scrollLeft = event.currentTarget.scrollLeft;

    this.setState({ value: event.target.value });
  }

  handleScroll(event) {
    let result_element = document.querySelector("#highlight-content");
    result_element.scrollTop = event.currentTarget.scrollTop;
    result_element.scrollLeft = event.currentTarget.scrollLeft;

    let result_element_2 = document.querySelector("#highlight");
    result_element_2.scrollTop = event.currentTarget.scrollTop;
    result_element_2.scrollLeft = event.currentTarget.scrollLeft;
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
      this.handleInput(event);
    }
  }

  handleTitleClick() {
    this.setState((prevState) => ({ drawerActive: !prevState.drawerActive }));
  }

  render() {
    const { markdownText, drawerTitle, drawerChildren } = this.props;
    const drawerStyles = this.state.drawerActive ? "is-expanded" : "";
    return (
      <div>
        <div>
          <pre id="highlight" aria-hidden="true" direction="rtl">
            <code
              id="highlight-content"
              className="language-markdown"
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
            tabIndex="0"
          >
            {markdownText}
          </textarea>
        </div>
        <div className="split right">
          <div direction="rtl" id="markdown-placeholder"></div>
        </div>
      </div>
    );
  }
}

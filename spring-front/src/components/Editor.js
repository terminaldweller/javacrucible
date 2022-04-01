import React from "react";
import ReactDOM from "react-dom";
import hljs from "highlight.js/lib/core";
// const hljs = window.hljs;
import "highlight.js/styles/devibeans.css";
import markdown from "highlight.js/lib/languages/markdown.js";
import javascript from "highlight.js/lib/languages/javascript.js";
import python from "highlight.js/lib/languages/python.js";
import "../index.css";
import mit from "markdown-it";
import mithljs from "markdown-it-highlightjs";
import mittexmath from "markdown-it-texmath";
import mitmmdtable from "markdown-it-multimd-table";
import katex from "katex";

hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

mit({ html: true });
mit().use(mittexmath, {
  engine: katex,
  delimiters: "gitlab",
  katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
});
mit().use(mitmmdtable);
mit().use(mithljs, { inline: true, auto: false, code: false, hljs: hljs });

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
    this.state = { value: "" };
  }

  // TODO-use web worker instead
  updateCodeSyntaxHighlighting() {
    // document.querySelectorAll("pre code").forEach((block) => {
    //   console.log(block);
    //   hljs.highlightElement(block);
    // });
    hljs.highlightAll();
  }

  // TODO-use web worker instead
  parseMarkdown(event) {
    let element = document.getElementById("markdown-placeholder");
    let md = new mit();
    let htm = md.render(event.target.value);
    element.innerHTML = htm;
  }

  handleChange(event) {
    // this.setState({ value: event.target.value });
  }

  handleInput(event) {
    let result_element = document.getElementById("highlight-content");
    result_element.textContent = event.target.value;
    this.updateCodeSyntaxHighlighting();
    this.parseMarkdown(event);
    let result_element_2 = document.querySelector("#highlight");
    result_element_2.scrollTop = event.currentTarget.scrollTop;
    result_element_2.scrollLeft = event.currentTarget.scrollLeft;
    this.setState({ value: event.target.value });
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
      this.handleInput(event);
    }
  }

  render() {
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
          ></textarea>
        </div>
        <div className="split right">
          <div direction="rtl" id="markdown-placeholder"></div>
        </div>
      </div>
    );
  }
}

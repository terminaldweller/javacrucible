import React from "react";
import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown";
import "highlight.js/styles/devibeans.css";
import "../index.css";

hljs.registerLanguage("markdown", markdown);

// https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/
function update(text) {
  let result_element = document.querySelector("#highlighting-content");
  if (text[text.length - 1] == "\n") {
    text += " ";
  }
  result_element.innerHTML = text
    .replace(new RegExp("&", "g"), "&")
    .replace(new RegExp("<", "g"), "<");
  // Prism.highlightElement(result_element);
  // return result_element;
}

function sync_scroll(element) {
  let result_element = document.querySelector("#highlighting");
  result_element.scrollTop = element.scrollTop;
  result_element.scrollLeft = element.scrollLeft;
}

function check_tab(element, event) {
  let code = element.value;
  if (event.key == "Tab") {
    event.preventDefault();
    let before_tab = code.slice(0, element.selectionStart);
    let after_tab = code.slice(element.selectionEnd, element.value.length);
    let cursor_pos = element.selectionEnd + 1;
    element.value = before_tab + "\t" + after_tab;
    element.selectionStart = cursor_pos;
    element.selectionEnd = cursor_pos;
    update(element.value);
  }
}

function CreateTextArea() {
  return (
    <textarea
      spellcheck="false"
      name="editor"
      className="editor"
      id="editor"
      onInput={(this.update, this.sync_scroll)}
      onScroll={this.sync_scroll}
      onKeyDown={this.check_tab}
    ></textarea>
  );
}

function CreatePreCode() {
  return (
    <pre id="highlight" aria-hidden="true">
      <code className="language-markdown" id="highlight-content"></code>
    </pre>
  );
}

export default function Left() {
  return (
    <div class="split left">
      <CreateTextArea />
      <CreatePreCode />
    </div>
  );
}

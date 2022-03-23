import React from "react";
import ReactDOM from "react-dom";
import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown";
import "highlight.js/styles/devibeans.css";

hljs.registerLanguage("markdown", markdown);

function update(text) {
  let result_element = document.querySelector("#highlight-content");
  result_element.innerText = text;
  return hljs.highlight(text, { language: "markdown" }).value;
}

function CreateTextArea() {
  return <textarea name="editor" className="editor" id="editor"></textarea>;
}

function CreatePreCode() {
  return (
    <pre id="highlight" aria-hidden="true">
      <code className="language-markdown" id="highlight-content"></code>
    </pre>
  );
}

function CreateRoot() {
  return (
    <div>
      <p>RTLMD ftw bebe!!!</p>
    </div>
  );
}

ReactDOM.render(<CreatePreCode />, document.getElementById("root2"));
ReactDOM.render(<CreateTextArea />, document.getElementById("root2"));
ReactDOM.render(<CreateRoot />, document.getElementById("root"));

import React from "react";
import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown";
import "highlight.js/styles/devibeans.css";
import "../index.css";

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

export default function Left() {
  return (
    <div>
      <CreateTextArea />
      <CreatePreCode />
    </div>
  );
}

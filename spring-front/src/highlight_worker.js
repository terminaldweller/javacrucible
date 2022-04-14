import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown.js";
import javascript from "highlight.js/lib/languages/javascript.js";
import python from "highlight.js/lib/languages/python.js";
import C from "highlight.js/lib/languages/c.js";
import bash from "highlight.js/lib/languages/bash.js";

hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("c", C);
hljs.registerLanguage("bash", bash);

self.onmessage(
  "message",
  (e) => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
      postMessage("highlight done");
    });
  },
  false
);

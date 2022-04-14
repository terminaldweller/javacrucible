import mit from "markdown-it";
import mithljs from "markdown-it-highlightjs";
import mittexmath from "markdown-it-texmath";
import mitmmdtable from "markdown-it-multimd-table";
import katex from "katex";

const md = new mit({ html: true })
  .enable(["table"])
  .use(mittexmath, {
    engine: katex,
    delimiters: "gitlab",
    katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
  })
  .use(mitmmdtable)
  .use(mithljs, { inline: true, auto: true, code: true, hljs: hljs });

self.addEventListener(
  "message",
  (event) => {
    let htm = md.render(event.target.value);
    self.postMessage(htm);
  },
  false
);

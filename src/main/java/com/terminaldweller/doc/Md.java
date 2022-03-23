package com.terminaldweller.doc;

import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

/** The markdown class which provides the markdown parser. */
public class Md {
  /**
   * Parses a markdown string and returns the result in html.
   *
   * @param markdown the string containing the markdown string.
   * @return the rendered markdown document in html.
   */
  public String mdparseService(String markdown) {
    Parser parser = Parser.builder().build();
    Node document = parser.parse(markdown);
    HtmlRenderer renderer = HtmlRenderer.builder().build();
    return renderer.render(document);
  }
}

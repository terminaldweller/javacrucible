package com.terminaldweller.doc;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** The document controller class. */
@RestController
@RequestMapping(path = "api/v1/doc")
public class DocController {
  private final DocService docService;

  @Autowired
  public DocController(DocService docService) {
    this.docService = docService;
  }

  @GetMapping
  public List<Doc> getDocs() {
    return docService.getDocs();
  }
}

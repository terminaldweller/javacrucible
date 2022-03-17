package com.terminaldweller.doc;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public void postDocs(@RequestBody Doc doc) {
    docService.addNewDoc(doc);
  }

  @DeleteMapping(path = "{Id}")
  public void deleteDocs(@PathVariable("Id") Long id) {
    docService.deleteDoc(id);
  }
}

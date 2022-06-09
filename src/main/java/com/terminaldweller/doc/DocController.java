package com.terminaldweller.doc;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/** The document controller class. */
@RestController
// @CrossOrigin(origins = {"https://localhost:7080, https://editor.terminaldweller.com"})
// @CrossOrigin(origins = "https://localhost:7080")
@RequestMapping(path = "api/v1/doc")
public class DocController {
  private final DocService docService;

  @Autowired
  public DocController(DocService docService) {
    this.docService = docService;
  }

  @CrossOrigin(origins = "https://localhost:7080")
  @GetMapping(path = "{Id}")
  public Optional<Doc> getDocs(@PathVariable("Id") Long id) {
    return docService.getDocs(id);
  }

  @CrossOrigin(origins = "https://localhost:7080")
  @PostMapping(path = "{Id}")
  @ResponseStatus(HttpStatus.CREATED)
  public void postDocs(@PathVariable("Id") Long id, @RequestBody Doc doc) {
    docService.addNewDoc(id, doc);
  }

  @CrossOrigin(origins = "https://localhost:7080")
  @DeleteMapping(path = "{Id}")
  public void deleteDocs(@PathVariable("Id") Long id) {
    docService.deleteDoc(id);
  }

  @CrossOrigin(origins = "https://localhost:7080")
  @PutMapping(path = "{Id}")
  public void updatDoc(@RequestBody Doc doc, @PathVariable("Id") long id) {
    docService.updateDoc(doc, id);
  }
}

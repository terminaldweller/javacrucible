package com.terminaldweller.doc;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/** The document service class. */
@Service
public class DocService {
  private final DocRepository docRepository;

  @Autowired
  public DocService(DocRepository docRepository) {
    this.docRepository = docRepository;
  }

  public List<Doc> getDocs() {
    return docRepository.findAll();
  }

  /**
   * Adds a new Document to the data store.
   *
   * @param doc the new Document to add.
   */
  public void addNewDoc(Doc doc) {
    Optional<Doc> docOptional = docRepository.findDocByName(doc.getName());
    if (docOptional.isPresent()) {
      throw new IllegalStateException("Id is already taken");
    }
    docRepository.save(doc);
  }

  /**
   * Deletes a document from the data store.
   *
   * @param id The identifier for the document to be deleted.
   */
  public void deleteDoc(Long id) {
    boolean exists = docRepository.existsById(id);
    if (!exists) {
      throw new IllegalStateException("doc " + id + " does not exitst");
    }
    docRepository.deleteById(id);
  }
}

package com.terminaldweller.doc;

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

  public Optional<Doc> getDocs(Long id) {
    Optional<Doc> docOptional = docRepository.findById(id);
    if (docOptional.isPresent()) {
      return docOptional;
    }
    throw new IllegalStateException("Id does not exist");
  }

  /**
   * Adds a new Document to the data store.
   *
   * @param doc the new Document to add.
   */
  public void addNewDoc(Long id, Doc doc) {
    // Optional<Doc> docOptional = docRepository.findDocByName(doc.getName());
    Optional<Doc> docOptional = docRepository.findById(id);
    if (docOptional.isPresent()) {
      throw new IllegalStateException("Id is already taken");
    }
    doc.setId(id);
    docRepository.save(doc);
  }

  /**
   * Update a Document.
   *
   * @param doc the document to update.
   */
  public void updateDoc(Doc doc, Long id) {
    Optional<Doc> docOptional = docRepository.findById(id);
    if (!docOptional.isPresent()) {
      throw new IllegalStateException("Resource must be created before update");
    }
    doc.setId(id);
    doc.setLastModified(System.currentTimeMillis() / 1000L);
    doc.setBody(doc.getBody());
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
      throw new IllegalStateException("doc " + Long.toString(id) + " does not exitst");
    }
    docRepository.deleteById(id);
  }
}

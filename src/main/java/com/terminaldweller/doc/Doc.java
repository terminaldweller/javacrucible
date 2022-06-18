package com.terminaldweller.doc;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/** The document class. */
@Entity
@Table
public class Doc {
  @Id
  // @SequenceGenerator(name = "doc_sequence", sequenceName = "doc_sequence", allocationSize = 1)
  // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "doc_sequence")
  private Long id;

  private String name;
  private long lastModified;

  @Column(length = 10000)
  private String body;

  public Doc() {}

  /**
   * The full constructor for a document.
   *
   * @param id the id given by the db.
   * @param name the name of the documment given by the user.
   * @param lastModified the date of the last modification in unix epoch.
   * @param body the actual text of the document.
   */
  public Doc(Long id, String name, long lastModified, String body) {
    this.id = id;
    this.name = name;
    this.lastModified = lastModified;
    this.body = body;
  }

  /**
   * Constructor without the id.
   *
   * @param name document name
   * @param lastModified date of last modification
   * @param body document content
   */
  public Doc(String name, long lastModified, String body) {
    this.name = name;
    this.lastModified = lastModified;
    this.body = body;
  }

  public Long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public long getLastModified() {
    return this.lastModified;
  }

  public String getBody() {
    return this.body;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setLastModified(long lastModified) {
    this.lastModified = lastModified;
  }

  public void setBody(String body) {
    this.body = body;
  }
}

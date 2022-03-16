package com.terminaldweller.doc;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/** The document class. */
@Entity
@Table
public class Doc {
  @Id
  @SequenceGenerator(name = "doc_sequence", sequenceName = "doc_sequence", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "doc_sequence")
  private Long id;

  private String name;
  private long lastModified;

  public Doc() {}

  /**
   * The full constructor for a document.
   *
   * @param id the id given by the db.
   * @param name the name of the documment given by the user.
   * @param lastModified the date of the last modification in unix epoch.
   */
  public Doc(Long id, String name, long lastModified) {
    this.id = id;
    this.name = name;
    this.lastModified = lastModified;
  }

  public Doc(String name, long lastModified) {
    this.name = name;
    this.lastModified = lastModified;
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

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setLastModified(long lastModified) {
    this.lastModified = lastModified;
  }
}

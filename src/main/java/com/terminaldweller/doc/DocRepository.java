package com.terminaldweller.doc;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/** The interface of the doc class for the data store. */
@Repository
public interface DocRepository extends JpaRepository<Doc, Long> {
  @Query("SELECT d FROM Doc d WHERE d.name = ?1")
  Optional<Doc> findDocByName(String name);

  @Query("SELECT d FROM Doc d WHERE d.id = ?1")
  Optional<Doc> findDocById(Long id);
}

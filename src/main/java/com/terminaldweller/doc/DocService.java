package com.terminaldweller.doc;

import java.util.List;
import org.springframework.stereotype.Service;

/** The document service class. */
@Service
public class DocService {
  public List<Doc> getDocs() {
    return List.of(new Doc(1L, "loco", 0L));
  }
}

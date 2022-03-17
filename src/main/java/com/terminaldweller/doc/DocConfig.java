package com.terminaldweller.doc;

import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/** The config class. */
@Configuration
public class DocConfig {
  @Bean
  CommandLineRunner commandLineRunner(DocRepository repository) {
    return args -> {
      Doc mydoc1 = new Doc("mydoc1", 0L);
      Doc mydoc2 = new Doc("mydoc2", 0L);

      repository.saveAll(List.of(mydoc1, mydoc2));
    };
  }
}

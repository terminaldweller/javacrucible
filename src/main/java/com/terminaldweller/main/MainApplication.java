package com.terminaldweller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** The main class. */
@SpringBootApplication
@RestController
public class MainApplication {
  /**
   * just a dummy main.
   *
   * @param args just the argv
   */
  public static void main(String[] args) {
    SpringApplication.run(MainApplication.class, args);
  }

  @RequestMapping("/")
  public String home() {
    return "Hello Docker World";
  }
}

package com.terminaldweller;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/** The server config class. */
@Configuration
@EnableWebMvc
@Profile("development")
public class DevConfiguration implements WebMvcConfigurer {

  /**
   * Configuring CORS headers.
   *
   * @param registry the registry.
   */
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
        .addMapping("/api/**")
        .allowedOrigins("https://editor.terminaldweller.com")
        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
        .allowedHeaders("*")
        .maxAge(3600);
    // .allowedOrigins("https://localhost:7080", "https://editor.terminaldweller.com")
  }
}

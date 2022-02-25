// https://docs.gradle.org/current/userguide/building_java_projects.html
plugins {
  `java-library`
  // application
  id("org.springframework.boot") version "2.6.4"
  id("io.spring.dependency-management") version "1.0.11.RELEASE"
  id("java")
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("org.springframework.boot:spring-boot-starter-data-jdbc")
  implementation("org.springframework.boot:spring-boot-starter-web")
  runtimeOnly("org.postgresql:postgresql")
  testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.create("FatJar", Jar::class) {
  description = "makes a fatjar"
  group = "build"
  manifest.attributes["Main-Class"] = "com.terminaldweller.MainApplication"
  duplicatesStrategy = DuplicatesStrategy.EXCLUDE
  val dependencies = configurations.runtimeClasspath.get().map(::zipTree)
  from(dependencies)
  with(tasks.jar.get())
}

sourceSets {
  main {
    java {
      setSrcDirs(listOf("src"))
    }
  }

  test {
    java {
      setSrcDirs(listOf("test"))
    }
  }
}

java {
  toolchain {
    languageVersion.set(JavaLanguageVersion.of(11))
  }
}

tasks.compileJava {
  options.isIncremental = true
  options.isFork = true
  options.isFailOnError = false
  options.release.set(11)
}

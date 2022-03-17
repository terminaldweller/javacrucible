// https://docs.gradle.org/current/userguide/building_java_projects.html
plugins {
  `java-library`
  id("org.springframework.boot") version "2.6.4"
  id("io.spring.dependency-management") version "1.0.11.RELEASE"
  id("java-library")
  // id("com.sourcegraph.gradle") version "1.3"
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("org.springframework.boot:spring-boot-starter-data-jdbc:2.6.4")
  implementation("org.springframework.boot:spring-boot-starter-data-jdbc:2.6.4:sources")
  api("org.springframework.boot:spring-boot-starter-data-jdbc:2.6.4:javadoc")
  implementation("org.springframework.boot:spring-boot-starter-data-jpa:2.6.4")
  implementation("org.springframework.boot:spring-boot-starter-data-jpa:2.6.4:sources")
  api("org.springframework.boot:spring-boot-starter-data-jpa:2.6.4:javadoc")
  implementation("org.springframework.boot:spring-boot-starter-web:2.6.4")
  implementation("org.springframework.boot:spring-boot-starter-web:2.6.4:sources")
  api("org.springframework.boot:spring-boot-starter-web:2.6.4:javadoc")
  implementation("org.commonmark:commonmark:0.18.2")
  implementation("org.commonmark:commonmark:0.18.2:sources")
  implementation("org.commonmark:commonmark:0.18.2:javadoc")
  implementation("org.commonmark:commonmark-ext-gfm-tables:0.18.2")
  implementation("org.commonmark:commonmark-ext-gfm-strikethrough:0.18.2")
  implementation("org.commonmark:commonmark-ext-task-list-items:0.18.2")
  implementation("org.commonmark:commonmark-ext-ins:0.18.2")
  runtimeOnly("org.postgresql:postgresql")
  testImplementation("org.hibernate.javax.persistence:hibernate-jpa-2.1-api")
}

// task copyJavadocsAndSources {
//     inputs.files configurations.runtime
//     outputs.dir "${buildDir}/download"
//     doLast {
//         def componentIds = configurations.runtime.incoming.resolutionResult.allDependencies.collect { it.selected.id }
//         ArtifactResolutionResult result = dependencies.createArtifactResolutionQuery()
//             .forComponents(componentIds)
//             .withArtifacts(JvmLibrary, SourcesArtifact, JavadocArtifact)
//             .execute()
//         def sourceArtifacts = []
//         result.resolvedComponents.each { ComponentArtifactsResult component ->
//             Set<ArtifactResult> sources = component.getArtifacts(SourcesArtifact)
//             println "Found ${sources.size()} sources for ${component.id}"
//             sources.each { ArtifactResult ar ->
//                 if (ar instanceof ResolvedArtifactResult) {
//                     sourceArtifacts << ar.file
//                 }
//             }
//         }

//         copy {            
//             from sourceArtifacts
//             into "${buildDir}/download"
//         }
//     }
// }

springBoot {
  mainClass.set("com.terminaldweller.MainApplication")
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
  options.isFailOnError = true
  options.release.set(11)
}

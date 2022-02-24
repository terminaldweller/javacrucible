 /*https://docs.gradle.org/current/userguide/building_java_projects.html*/
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
   // sourceCompatibility = JavaVersion.VERSION_11
   // targetCompatibility = JavaVersion.VERSION_11
   toolchain {
     languageVersion.set(JavaLanguageVersion.of(11))
   }
 }

 // application {
   //   mainClass.set("com.terminaldweller.Main")
   // }

   tasks.compileJava {
     options.isIncremental = true
     options.isFork = true
     options.isFailOnError = false
     options.release.set(11)
   }

   dependencies {
     implementation("org.springframework.boot:spring-boot-starter-data-jdbc")
     implementation("org.springframework.boot:spring-boot-starter-web")
     runtimeOnly("org.postgresql:postgresql")
     testImplementation("org.springframework.boot:spring-boot-starter-test")
   }

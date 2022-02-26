FROM gradle:7.3.3-jdk11-alpine AS builder
WORKDIR /home/springapp
COPY --chown=gradle:gradle ./gradlew /home/springapp/
COPY --chown=gradle:gradle ./settings.gradle.kts /home/springapp/
COPY --chown=gradle:gradle ./build.gradle.kts /home/springapp/
RUN gradle wrapper --no-daemon
COPY --chown=gradle:gradle ./src /home/springapp/src
RUN gradle bootJar --no-daemon

FROM eclipse-temurin:11-jre-alpine
WORKDIR /springapp
COPY --from=builder /home/springapp/build/libs/src.jar ./src.jar
ENTRYPOINT ["java", "-jar", "/springapp/src.jar"]

FROM alpine:3.15 as certbuilder
RUN apk add openssl
WORKDIR /certs
RUN openssl req -nodes -new -x509 -subj="/C=US/ST=Denial/L=springfield/O=Dis/CN=localhost" -keyout server.key -out server.cert
RUN openssl pkcs12 -export -out cert.p12 -inkey server.key -in server.cert -password pass:thequicklazybrownfox

FROM gradle:7.3.3-jdk11-alpine AS builder
WORKDIR /home/springapp
COPY --chown=gradle:gradle ./gradlew /home/springapp/
COPY --chown=gradle:gradle ./settings.gradle.kts /home/springapp/
COPY --chown=gradle:gradle ./build.gradle.kts /home/springapp/
RUN gradle wrapper --no-daemon
COPY --chown=gradle:gradle ./src /home/springapp/src
RUN gradle bootJar --no-daemon

FROM eclipse-temurin:11-jre-alpine
COPY --from=certbuilder /certs /certs
WORKDIR /springapp
COPY --from=builder /home/springapp/build/libs/rtlmd.jar ./rtlmd.jar
ENTRYPOINT ["java", "-jar", "/springapp/rtlmd.jar"]

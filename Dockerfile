FROM openjdk:11-jdk-alpine
ARG JAR_FILE=./build/libs/src.jar
COPY ${JAR_FILE} src.jar
ENTRYPOINT ["java", "-jar", "/src.jar"]

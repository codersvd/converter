FROM openjdk:8
ADD target/server-0.0.1-SNAPSHOT.jar server-0.0.1-SNAPSHOT.jar
COPY src/main/resources/schema.sql /docker-entrypoint-initdb.d/
COPY src/main/resources/data.sql /docker-entrypoint-initdb.d/
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]
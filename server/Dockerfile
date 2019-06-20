FROM openjdk:8
ADD target/server-0.0.1-SNAPSHOT.jar server-0.0.1-SNAPSHOT.jar
COPY target/classes/schema.sql /docker-entrypoint-initdb.d/
COPY target/classes/data.sql /docker-entrypoint-initdb.d/
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]
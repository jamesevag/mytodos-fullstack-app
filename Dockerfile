FROM java:8
VOLUME /tmp
ADD target/todoapp-0.0.1-SNAPSHOT.jar todo.jar
EXPOSE 8080
RUN bash -c ‘touch /todo.jar’
ENTRYPOINT [“java”,”-Dspring.data.mongodb.uri=mongodb://mongo/todoapp, “-Djava.security.egd=file:/dev/./urandom”,”-jar”,”/app.jar”]
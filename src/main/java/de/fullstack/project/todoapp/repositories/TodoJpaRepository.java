package de.fullstack.project.todoapp.repositories;

import de.fullstack.project.todoapp.entities.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface TodoJpaRepository extends MongoRepository<Todo, String> {
    List<Todo> findByUsername(String username);
}
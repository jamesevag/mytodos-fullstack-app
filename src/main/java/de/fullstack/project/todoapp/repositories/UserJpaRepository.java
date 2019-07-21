package de.fullstack.project.todoapp.repositories;

import de.fullstack.project.todoapp.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface UserJpaRepository extends MongoRepository<User, String> {
    User findByUsername(String username);

    User findByUsernameAndPassword(String username, String password);
}
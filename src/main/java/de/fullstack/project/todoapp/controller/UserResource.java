package de.fullstack.project.todoapp.controller;

import de.fullstack.project.todoapp.common.Utils;
import de.fullstack.project.todoapp.repositories.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserResource {

    @Autowired()
    private UserJpaRepository userJpaRepository;

    @GetMapping("/jpa/user/exists/{username}/{password}")
    public boolean isInvalidLogin(
            @PathVariable String username, @PathVariable String password){

        return Utils.isEmpty(userJpaRepository.findByUsernameAndPassword(username,password));
    }
}

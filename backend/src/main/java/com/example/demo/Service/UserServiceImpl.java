package com.example.demo.Service;


import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.repositoryDto.UserRegistrationDto;

import java.util.Arrays;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl {
    @Autowired
    UserRepository userRepository;

    public User saveUser(UserRegistrationDto registrationdto) {
        User user = new User(registrationdto.getFirstName(), registrationdto.getLastName(), registrationdto.getEmail(),
                registrationdto.getPassword(), Arrays.asList(new Role("ROLE_USER")));
        return userRepository.save(user);
    }
    public User getValidate(String username) {
        return userRepository.findByEmail(username);
    }
}
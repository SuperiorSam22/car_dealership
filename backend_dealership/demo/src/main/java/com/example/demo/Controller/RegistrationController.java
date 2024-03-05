package com.example.demo.Controller;


import com.example.demo.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.UserServiceImpl;

import com.example.demo.repositoryDto.UserRegistrationDto;
@RestController
@CrossOrigin
@RequestMapping("/api")
public class RegistrationController
{
	
	private UserServiceImpl userServiceImpl;
	
	public RegistrationController(UserServiceImpl userServiceImpl) 
	{
		super();
		this.userServiceImpl = userServiceImpl;
	}
	@CrossOrigin
	@GetMapping("/test")
	public String sum()
	{
		  return "home";
	}
	@CrossOrigin
	@PostMapping("/register")
	public ResponseEntity<User> createEntry(@RequestBody UserRegistrationDto registrationDto)
	{
		return  userServiceImpl.saveUser(registrationDto);
    }

}

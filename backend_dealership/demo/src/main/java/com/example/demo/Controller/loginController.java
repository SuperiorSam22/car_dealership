package com.example.demo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Service.UserServiceImpl;
import com.example.demo.model.User;
import com.example.demo.repositoryDto.UserRegistrationDto;

@RestController
@RequestMapping("/view")
public class loginController 
{
	    @Autowired
	    public UserServiceImpl userserviceImpl;
		@CrossOrigin
	   @ModelAttribute("user")
	   public UserRegistrationDto userRegDto()
	   {
		     return new UserRegistrationDto();
	   }
	@CrossOrigin
	   @GetMapping("/home-page")
	   public String toCheck()
	   {
		     return "home";
	   }
	@CrossOrigin
	   
	   @GetMapping("/")
	   public String nothings()
	   {
		     return "homeis";
	   }
	@CrossOrigin
	   @GetMapping("/registration-page")
	   public String regPage()
	   {
		   return "index";
	   }
	@CrossOrigin
	   @PostMapping("/login")
		public  ResponseEntity<User> Validate(@RequestBody User bd)
		  {
			  System.out.println(bd);
			 User user  = userserviceImpl.getValidate(bd.getEmail());
			 String usmail=user.getEmail();
			 String uspass=user.getPassword();
			 System.out.println(usmail+" "+uspass);
			if(usmail.equalsIgnoreCase(bd.getEmail()) && uspass.equalsIgnoreCase(bd.getPassword()))
			{
				return new ResponseEntity<>(user,HttpStatus.OK);
			}
			else
			{
				return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
			}
		 }
}

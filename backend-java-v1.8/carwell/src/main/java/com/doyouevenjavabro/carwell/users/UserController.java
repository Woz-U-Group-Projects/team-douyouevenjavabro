package com.doyouevenjavabro.carwell.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserRepository userDB;
	
//	GET ALL USERS
	@GetMapping("users/all")
	public List<User> getUsers() {
		System.out.println("Users were requested from DB. Return is: " + userDB.findAll());
		return userDB.findAll();
	}
	
//	POST vehicle (id)
	@PostMapping("/users")
	public ResponseEntity<User> postUser(@RequestBody User user) {
		User createdUser = userDB.save(user);
		return ResponseEntity.ok(createdUser);
	}

}

package com.doyouevenjavabro.carwell.users;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users/")
public class UserController {

	@Autowired
	UserRepository userDB;

// GET all
	@RequestMapping(method = RequestMethod.GET, value = { "admin", "admin/" })
	public Iterable<User> user() {
		return userDB.findAll();
	}

// GET by id
	@RequestMapping(method = RequestMethod.GET, value = "{id}")
	public ResponseEntity<User> getUser(@PathVariable("id") ObjectId id) {
		User foundUser = userDB.findById(id);

		if (foundUser == null) {
			return ResponseEntity.notFound().header("Users", "Nothing was found").build();
		}
		System.out.println("Got request for user using unique ID: " + id);
		return ResponseEntity.ok(foundUser);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/users/{userId}")
	public User update(@PathVariable ObjectId id, @RequestBody User user) {
		Optional<User> optuser = userDB.findById(id);
		User u = optuser.get();
		
		if(user.getUserId() != null)
			u.setUserId(user.getUserId());
		if(user.getFirstName() != null)
			u.setFirstName(user.getFirstName());
		if(user.getLastName() != null)
			u.setLastName(user.getLastName());
		if(user.getEmail() != null)
			u.setEmail(user.getEmail());
		userDB.save(u);
		return u;
	}
	

// GET by multiple entries by role
	@RequestMapping(method = RequestMethod.GET, value = "role/{role}")
	public List<User> findByRole(@PathVariable("role") String role) {
		System.out.println("Got search request for all users with a role: " + role);
		List<User> result = userDB.findByRole(role);

		if (result.isEmpty()) {
			System.out.println("Search query using: \"" + role + "\". I got no results");

			return result;
		} else
			System.out.println("Search query using: \"" + role + "\". Provided results");
		return result;

	}

//POST	
	@RequestMapping(method = RequestMethod.POST, value = { "" })
	public User save(@RequestBody User user) {
		userDB.save(user);
		return user;
	}

// PUT by id
	@RequestMapping(method = RequestMethod.PUT, value = "{id}")
	public User update(@PathVariable String id, @RequestBody User user) {
		Optional<User> optUser = userDB.findById(id);
		User updatedUser = optUser.get();

		if (user.getFirstName() != null)
			updatedUser.setFirstName(user.getFirstName());
		if (user.getLastName() != null)
			updatedUser.setLastName(user.getLastName());
//		We should not allow username change... thoughts?
		if (user.getUsername() != null)
			updatedUser.setUsername(user.getUsername());
		if (user.getPassword() != null)
			updatedUser.setPassword(user.getPassword());
//		We definitely should not allow role change from the frontend... thoughts?
//		if (user.getRole() != null)
//			updatedUser.setRole(user.getRole());
		userDB.save(updatedUser);
		System.out.println("Updated user details");
		return updatedUser;
	}

//DELETE
	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public String delete(@PathVariable String id) {
		Optional<User> optUser = userDB.findById(id);
		User user = optUser.get();
		userDB.delete(user);
		System.out.println("Deleted user");
		return "Success";
	}
}

package ort.geekstagram_student.controller;

import java.util.Date;
import java.util.UUID;

import javax.ws.rs.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ort.geekstagram_student.model.User;
import ort.geekstagram_student.service.IUserService;

@RestController
public class UserRestController {

	/**
	 * Repository of the comments
	 */
	@Autowired
	@Qualifier("FauxUserService")
	private IUserService userService;
	private ResponseEntity response;

	/**
	 * Get the full list of comments
	 *
	 * @return The iterable with the resultSet of mysql
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/api/users")
	public Iterable<User> getAll() {
		return userService.getAll();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/api/users")
	public Long add(@RequestBody User user) {
		User entity = null;
		try {
			// System.out.println("try add");
			entity = new User(user.getName(), user.getEmail(), user.getPassword());
			entity.setId(new Date().getTime());
			
			boolean addUser = userService.add(entity);
			System.out.println(addUser);
			if (addUser) {
				return entity.getId();
			} else {
				return new Long("0");
			}
		} catch (Exception e) {
			return new Long("0");
		}
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/api/users/{id}")
	public ResponseEntity update(@PathVariable("id") Long id, @RequestBody User user) {
		try {
			User entity = new User(user.getName(), user.getEmail(), user.getPassword());
			System.out.println(id + " controller");
			userService.update(id, entity);
			response = ResponseEntity.status(200).build();
		} catch (Exception e) {
			System.out.print(e);
			response = ResponseEntity.status(400).build();
		}

		return response;
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/api/users/{id}")
	public ResponseEntity remove(@PathVariable("id") long id) {
		try {
			userService.remove(id);
			response = ResponseEntity.status(200).build();
		} catch (Exception e) {
			response = ResponseEntity.status(400).build();
		}

		return response;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/api/users/{id}")
	public User getById(@PathParam("id") Long id) {
		try {
			return userService.getById(id);
		} catch (Exception e) {
			return null;
		}

	}

	@RequestMapping(method = RequestMethod.GET, value = "/api/users/test")
	public User test() {
		return new User("Test content", "test@test.fr", "mon mot de passe");
	}

	@RequestMapping(method = RequestMethod.POST, value = "/api/users/connect")
	public String connect(@RequestBody User user) {
		String token ="0";
		//System.out.println(user.getEmail());

		for (User u : userService.getAll()) {
			if (u != null && user != null) {
				if (u.getEmail().equalsIgnoreCase(user.getEmail()) && u.getPassword().equalsIgnoreCase(user.getPassword())) {
					token = UUID.randomUUID().toString();
					u.setToken(token);
				}
			}
		}

		return token;
	}

}
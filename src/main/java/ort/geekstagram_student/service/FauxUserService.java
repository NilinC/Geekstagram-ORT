package ort.geekstagram_student.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import ort.geekstagram_student.model.User;

@Component
@Qualifier("FauxUserService")
public class FauxUserService implements IUserService {

	public static List<User> liste = new ArrayList<User>();

	@Override
	public void add(User u) {
		// TODO Auto-generated method stub
		liste.add(u);

	}

	@Override
	public void remove(Long id) {
		// TODO Auto-generated method stub
		for (User user : liste) {
			if (user.getId() == id) {
				liste.remove(user);
			}
		}
	}

	@Override
	public List<User> getAll() {
		return liste;
	}

	@Override
	public User getById(Long id) {
	System.out.println(id);
		User this_user = new User();
		for (User user : liste) {
			if (user.getId() == id) {
				this_user = user;
			}
		}
		return this_user;
	}

	@Override
	public User update(Long id, User entity) {
		User this_user = new User();
		System.out.println(entity.getName());
		for (User user : liste) {
			System.out.print(user.getId()+" fonction update fauxuserservice "+id);
			if (user.getId() == id) {
				user.setEmail(entity.getEmail());
				user.setName(entity.getName());
				user.setPassword(entity.getPassword());
				return this_user = user;
			}
		}
		System.out.print(this_user.getEmail()+" fonction update fauxuserservice2");
		return this_user;
	}

}

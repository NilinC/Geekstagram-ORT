package ort.geekstagram_student.service;

import java.util.List;

import ort.geekstagram_student.model.User;

public interface IUserService {

	public boolean add(User u);

    public void remove(Long id);

    public List<User> getAll();

    public User getById(Long id);

    public User update(Long id, User entity);
	
}

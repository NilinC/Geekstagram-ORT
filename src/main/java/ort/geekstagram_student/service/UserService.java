package ort.geekstagram_student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import ort.geekstagram_student.model.User;
import ort.geekstagram_student.repository.IUserRepository;

@Component
@Qualifier("UserService")
public class UserService implements IUserService {

    private List<User> liste;

    //@Autowired
    //protected FauxUserService repository;

    @Override
    public void add(User u) {
		// TODO Auto-generated method stub
        //repository.save(u);
    }

    @Override
    public void remove(Long id) {
		// TODO Auto-generated method stub
        //repository.delete(id);
    }

    @Override
    public List<User> getAll() {
		// TODO Auto-generated method stub
        //repository.findAll();
        return null;
    }

    @Override
    public User getById(Long id) {
        // TODO Auto-generated method stub
        return null;//repository.findOne(id);
    }

    @Override
    public User update(Long id, User entity) {
        // TODO Auto-generated method stub
        return null;
    }

}

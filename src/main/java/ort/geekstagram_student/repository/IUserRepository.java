package ort.geekstagram_student.repository;

import ort.geekstagram_student.model.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserRepository extends CrudRepository<User,Long>{

}

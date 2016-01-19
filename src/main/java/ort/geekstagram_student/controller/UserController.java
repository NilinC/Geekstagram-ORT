package ort.geekstagram_student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import ort.geekstagram_student.model.User;
import ort.geekstagram_student.service.FauxUserService;


@Controller
@RequestMapping("/mvc/user")
public class UserController{
    
   
	@Autowired
	private FauxUserService fauxUserService;
	
	public UserController() {
		super();
	}

	
	// rooting
	@RequestMapping("/")
	public String index(){
		return "index";
	}
	
	
	
	@RequestMapping(method = RequestMethod.GET)
	public String addUser(User user, BindingResult result){
		System.out.println(user.getName());
		return "user/createUser";
	}
// end rooting
	
	
	
}

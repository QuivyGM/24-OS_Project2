package com.example.protoweb.Posts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;

@Service
public class PostbadsService {
	@Autowired
	private PostbadsRepository postbadsrepository;
	
	@Transactional(readOnly = true)
	public List<Postbads> findAll() {
		List<Postbads> pb = postbadsrepository.findAll();
		return pb;
	}
	
	@Transactional
	public String save(Accounts _user, Posts _post) {
		postbadsrepository.save(new Postbads(_user, _post));
		return "Ok";
	}
	
	@Transactional
	public boolean existUAP(int _user, int _post) {
		return postbadsrepository.existsByUserIdAndPostId(_user, _post);
	}
}
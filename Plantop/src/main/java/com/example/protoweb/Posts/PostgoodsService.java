package com.example.protoweb.Posts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;

@Service
public class PostgoodsService {
	@Autowired
	private PostgoodsRepository postgoodsrepository;
	
	@Transactional(readOnly = true)
	public List<Postgoods> findAll() {
		List<Postgoods> pb = postgoodsrepository.findAll();
		return pb;
	}
	
	@Transactional
	public String save(Accounts _user, Posts _post) {
		postgoodsrepository.save(new Postgoods(_user, _post));
		return "Ok";
	}
	
	@Transactional
	public boolean existUAP(int _user, int _post) {
		return postgoodsrepository.existsByUserIdAndPostId(_user, _post);
	}
}

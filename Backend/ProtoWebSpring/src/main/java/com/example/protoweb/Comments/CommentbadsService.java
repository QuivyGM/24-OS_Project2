package com.example.protoweb.Comments;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;

@Service
public class CommentbadsService {
	@Autowired
	private CommentbadsRepository commentbadsrepository;
	
	@Transactional(readOnly = true)
	public List<Commentbads> findAll() {
		List<Commentbads> pb = commentbadsrepository.findAll();
		return pb;
	}
	
	@Transactional
	public String save(Accounts _user, Comments _post) {
		commentbadsrepository.save(new Commentbads(_user, _post));
		return "Ok";
	}
	
	@Transactional
	public boolean existUAP(int _user, int _post) {
		return commentbadsrepository.existsByUserIdAndCommentId(_user, _post);
	}

}

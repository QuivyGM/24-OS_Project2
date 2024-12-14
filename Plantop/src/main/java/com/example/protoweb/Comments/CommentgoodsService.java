package com.example.protoweb.Comments;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;

@Service
public class CommentgoodsService {
	@Autowired
	private CommentgoodsRepository commentgoodsrepository;
	
	@Transactional(readOnly = true)
	public List<Commentgoods> findAll() {
		List<Commentgoods> pb = commentgoodsrepository.findAll();
		return pb;
	}
	
	@Transactional
	public String save(Accounts _user, Comments _post) {
		commentgoodsrepository.save(new Commentgoods(_user, _post));
		return "Ok";
	}
	
	@Transactional
	public boolean existUAP(int _user, int _post) {
		return commentgoodsrepository.existsByUserIdAndCommentId(_user, _post);
	}

}

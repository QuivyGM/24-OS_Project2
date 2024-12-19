package com.example.protoweb.Comments;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Posts.Posts;


@Service
public class CommentsService {
	@Autowired
    private CommentsRepository Sv;
	
	@Transactional(readOnly = true)
	public List<Comments> findAll() {
		List<Comments> acc = Sv.findAll();
		return acc;
	}
	
	@Transactional
	public String save(String body, Accounts acc, Posts post) {
		Sv.save(new Comments(body,acc,post));
		return "Ok";
	}
	
	@Transactional
	public String save(Comments ac) {
		Sv.save(ac);
		return "Ok";
	}

	@Transactional(readOnly = true)
	public List<Comments> findAllByOrderByLikesDesc() {
		List<Comments> acc = Sv.findAllByOrderByLikesDesc();
		return acc;
	}

	@Transactional
	public Comments findById(int _id) {
		Optional<Comments> tmp = Sv.findById(_id);
		if(tmp.isPresent())
			return tmp.get();
		else
			return null;
	}
	
	@Transactional
	public String deleteById(int Id) {
		Sv.deleteById(Id);
		return "Ok";
	}
}

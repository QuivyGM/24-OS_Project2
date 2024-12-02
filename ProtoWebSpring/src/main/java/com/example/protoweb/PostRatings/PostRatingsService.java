package com.example.protoweb.PostRatings;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Posts.Posts;

@Service
public class PostRatingsService {
	@Autowired
	private PostRatingsRepository ptrepository;
	
	@Transactional(readOnly = true)
	public List<PostRatings> findAll() {
		List<PostRatings> acc = ptrepository.findAll();
		return acc;
	}
	
	@Transactional
	public String save(int Rating, Accounts ac, Posts pt) {
		ptrepository.save(new PostRatings(Rating, ac, pt));
		return "Ok";
	}
	
	@Transactional
	public PostRatings findById(int _id) {
		Optional<PostRatings> tmp = ptrepository.findById(_id);
		return tmp.get();
	}

}

package com.example.protoweb.Posts;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;

@Service
public class PostsService {
	@Autowired
	private PostsRepository postsrepository;
	
	@Transactional(readOnly = true)
	public List<Posts> findAll() {
		List<Posts> acc = postsrepository.findAll();
		return acc;
	}

	@Transactional(readOnly = true)
	public List<Posts> findTopByOrderByLikesDesc() {
		List<Posts> acc = postsrepository.findTopByOrderByLikesDesc();
		return acc;
	}

	@Transactional(readOnly = true)
	public List<Posts> findAllByOrderByLikesDesc() {
		List<Posts> acc = postsrepository.findAllByOrderByLikesDesc();
		return acc;
	}

	@Transactional(readOnly = true)
	public List<Posts> findAllByOrderByIdDesc() {
		List<Posts> acc = postsrepository.findAllByOrderByIdDesc();
		return acc;
	}
	
	@Transactional
	public String save(String _title, String _body, String _tags, Accounts _user) {
		postsrepository.save(new Posts(_title, _body, _tags, _user));
		return "Ok";
	}
	
	@Transactional
	public String save(Posts pt) {
		postsrepository.save(pt);
		return "Ok";
	}
	
	@Transactional(readOnly = true)
	public Posts findById(int _id) {
		Optional<Posts> tmp = postsrepository.findById(_id);
		return tmp.get();
	}
}

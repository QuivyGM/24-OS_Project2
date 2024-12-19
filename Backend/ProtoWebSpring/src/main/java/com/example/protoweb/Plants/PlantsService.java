package com.example.protoweb.Plants;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Posts.Posts;

@Service
public class PlantsService {
	@Autowired
	private PlantsRepository imagerepository;
	
	@Transactional(readOnly = true)
	public List<Plants> findAll() {
		List<Plants> acc = imagerepository.findAll();
		return acc;
	}

	@Transactional(readOnly = true)
	public Plants findFirst() {
		Plants acc = imagerepository.findFirstByOrderById();
		return acc;
	}

	@Transactional(readOnly = true)
	public List<Plants> findFirst15OrderByAvgRating() {
		List<Plants> acc = imagerepository.findTop15ByOrderByAvgratingDesc();
		return acc;
	}

	@Transactional(readOnly = true)
	public List<Plants> findFirst4OrderByAvgRating() {
		List<Plants> acc = imagerepository.findTop4ByOrderByAvgratingDesc();
		return acc;
	}
	
	@Transactional
	public String save(String _name,int _imgId, String _desc, String _feat, int _pirce) {
		imagerepository.save(new Plants(_name, _imgId, _desc, _feat,_pirce));
		return "Ok";
	}
	
	@Transactional(readOnly = true)
	public Plants findById(int _id) {
		Optional<Plants> tmp = imagerepository.findById(_id);
		return tmp.get();
	}

	@Transactional(readOnly = true)
	public List<Plants> findAllByOrderByavgratingDesc() {
		List<Plants> acc = imagerepository.findAllByOrderByAvgratingDesc();
		return acc;
	}

	@Transactional(readOnly = true)
	public List<Plants> findAllByOrderByIdDesc() {
		List<Plants> acc = imagerepository.findAllByOrderByIdDesc();
		return acc;
	}
}

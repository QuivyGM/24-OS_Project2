package com.example.protoweb.PlantRatings;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Plants.Plants;

@Service
public class PlantRatingsService {
	@Autowired
	private PlantRatingsRepository prrepository;
	
	@Transactional(readOnly = true)
	public List<PlantRatings> findAll() {
		List<PlantRatings> acc = prrepository.findAll();
		return acc;
	}
	
	@Transactional
	public String save(int Rating, Accounts ac, Plants pl) {
		prrepository.save(new PlantRatings(Rating, ac, pl));
		return "Ok";
	}
	
	@Transactional
	public PlantRatings findById(int _id) {
		Optional<PlantRatings> tmp = prrepository.findById(_id);
		return tmp.get();
	}
}

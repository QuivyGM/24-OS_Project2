package com.example.protoweb.Images;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ImagesService {
	@Autowired
	private ImagesRepository imagerepository;
	
	@Transactional(readOnly = true)
	public List<Images> findAll() {
		List<Images> acc = imagerepository.findAll();
		return acc;
	}
	
	@Transactional
	public String save(byte[] _res) {
		imagerepository.save(new Images(_res));
		return "Ok";
	}

	@Transactional
	public byte[] findById(int _id) {
		Optional<Images> tmp = imagerepository.findById(_id);
		if(tmp.isPresent())
			return tmp.get().getImage();
		else
			return null;
	}
	
	public boolean isExist(int _id) {
		return imagerepository.existsById(_id);
	}
}

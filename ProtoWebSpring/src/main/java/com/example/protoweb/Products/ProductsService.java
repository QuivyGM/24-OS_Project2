package com.example.protoweb.Products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductsService {
	@Autowired
    private ProductsRepository Sv;
	
	@Transactional(readOnly = true)
	public List<Products> findAll() {
		List<Products> acc = Sv.findAll();
		return acc;
	}
	
	@Transactional
	public String save(String name, int price, String desc) {
		Sv.save(new Products(name,price,desc));
		return "Ok";
	}
}

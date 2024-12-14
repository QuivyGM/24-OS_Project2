package com.example.protoweb.Products;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Products {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@Column
	private String name;
	
	@Column
	private int price;

	@Column
	private String description;
	
	@CreationTimestamp
	private Timestamp created_at;


	public Products() {}
	public Products(String _name, int _price, String _desc) {
		name = _name;
		price = _price;
		description = _desc;
	}
}

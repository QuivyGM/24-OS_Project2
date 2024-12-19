package com.example.protoweb.Plants;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.protoweb.PlantRatings.PlantRatings;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Plants {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;

	@Column
	private String name;
	
	@Column
	private int imgId;
	
	@Column
	@Size(min=0,max=65535)
	private String Description;
	
	@Column
	@Size(min=0,max=65535)
	private String feature;

	@Column
	private int RatingCount;

	@Column
	private long Rating;
	
	@Column
	private double avgrating;
	
	@Column
	private int price;
	
	@OneToMany(mappedBy="plant", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<PlantRatings> plantratings = new ArrayList<>();
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public Plants() {
		RatingCount = 0;
		Rating = 0;
		avgrating = 0;
	};
	public Plants(String _name,int _imgId, String _desc, String _feat, int _price) {
		name = _name;
		imgId = _imgId;
		Description = _desc;
		feature = _feat;
		RatingCount = 0;
		Rating = 0;
		avgrating = 0;
		price = _price;
	}
}

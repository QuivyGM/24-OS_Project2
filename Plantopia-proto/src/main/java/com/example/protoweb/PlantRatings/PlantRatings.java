package com.example.protoweb.PlantRatings;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Plants.Plants;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PlantRatings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@Column
	private int rating;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plants_id")
    private Plants plant;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public PlantRatings() {};
	public PlantRatings(int rating,Accounts _user, Plants _plant) {
		this.rating = rating;
		user = _user;
		plant = _plant;
	}
}
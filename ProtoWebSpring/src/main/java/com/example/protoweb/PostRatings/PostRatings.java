package com.example.protoweb.PostRatings;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Posts.Posts;

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
public class PostRatings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@Column
	private int rating;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "posts_id")
    private Posts posts;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public PostRatings() {};
	public PostRatings(int rating,Accounts _user, Posts _posts) {
		this.rating = rating;
		user = _user;
		posts = _posts;
	}
}
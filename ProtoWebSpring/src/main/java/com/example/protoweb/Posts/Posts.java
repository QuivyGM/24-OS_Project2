package com.example.protoweb.Posts;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.PostRatings.PostRatings;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Posts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@Column
	private String title;
	
	@Column
	@Size(min=0,max=65535)
	private String body;
	
	@Column
	private String tags;

	@Column
	private int RatingCount;

	@Column
	private long Rating;
	
	@Column
	private double avgRating;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	@OneToMany(mappedBy="posts", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<PostRatings> postratings = new ArrayList<>();
	
	public Posts() {
		RatingCount = 0;
		Rating = 0;
		avgRating = 0;
	};
	public Posts(String _title, String _body, String _tags, Accounts _user) {
		title = _title;
		body = _body;
		tags = _tags;
		user = _user;
		RatingCount = 0;
		Rating = 0;
		avgRating = 0;
	};
}

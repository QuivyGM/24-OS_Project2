package com.example.protoweb.Posts;

import java.sql.Timestamp;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import com.example.protoweb.Accounts.Accounts;

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
public class Postbads {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "posts_id")
    private Posts post;
	
	@CreationTimestamp
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private Timestamp created_at;
	
	public Postbads() {
	};
	public Postbads(Accounts _user, Posts _post) {
		post = _post;
		user = _user;
	};

}

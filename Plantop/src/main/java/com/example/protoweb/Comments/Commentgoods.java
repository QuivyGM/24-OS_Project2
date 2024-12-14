package com.example.protoweb.Comments;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

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
public class Commentgoods {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comments_id")
    private Comments comment;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public Commentgoods() {
	};
	public Commentgoods(Accounts _user, Comments _comment) {
		comment = _comment;
		user = _user;
	};
}

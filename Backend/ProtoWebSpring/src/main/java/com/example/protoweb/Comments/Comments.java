package com.example.protoweb.Comments;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Posts.Posts;

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
public class Comments {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@Column
	@Size(min=0,max=65535)
	private String body;
	
	@Column
	private int good;
	@Column
	private int bad;
	@Column
	private int likes;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "posts_id")
    private Posts post;
	
	@OneToMany(mappedBy="comment", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Commentgoods> commentgoods = new ArrayList<>();
	
	@OneToMany(mappedBy="comment", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Commentbads> commentbads = new ArrayList<>();
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public Comments() {
		good = 0;
		bad = 0;
		likes = 0;
	};
	public Comments(String _body, Accounts _user, Posts _post) {
		body = _body;
		post = _post;
		user = _user;
		good = 0;
		bad = 0;
		likes = 0;
	};
}

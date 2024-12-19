package com.example.protoweb.Posts;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Comments.Comments;

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
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
	private int good;
	@Column
	private int bad;
	@Column
	private int likes;
	
	@Column
	private int CommentsCount;
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp created_at;
	
	@OneToMany(mappedBy="post", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Comments> comments = new ArrayList<>();
	
	@OneToMany(mappedBy="post", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Postgoods> postgoods = new ArrayList<>();
	
	@OneToMany(mappedBy="post", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Postbads> postbads = new ArrayList<>();
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accounts_id")
    private Accounts user;
	
	public Posts() {
		CommentsCount = 0;
		good = 0;
		bad = 0;
		likes = 0;
	};
	public Posts(String _title, String _body, String _tags, Accounts _user) {
		title = _title;
		body = _body;
		tags = _tags;
		user = _user;
		CommentsCount = 0;
		good = 0;
		bad = 0;
		likes = 0;
	};
}

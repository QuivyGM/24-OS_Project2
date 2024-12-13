package com.example.protoweb.Accounts;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.example.protoweb.Comments.Commentbads;
import com.example.protoweb.Comments.Commentgoods;
import com.example.protoweb.Comments.Comments;
import com.example.protoweb.PlantRatings.PlantRatings;
import com.example.protoweb.Posts.Postbads;
import com.example.protoweb.Posts.Postgoods;
import com.example.protoweb.Posts.Posts;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Accounts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;

	@Column
	private String Username;
	
	@Column
	private String Password;
	
	@Column
	private String Nickname;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Posts> posts = new ArrayList<>();
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Postgoods> postgoods = new ArrayList<>();
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Postbads> postbads = new ArrayList<>();

	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<PlantRatings> plantratings = new ArrayList<>();
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Comments> comments = new ArrayList<>();
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Commentgoods> commentgoods = new ArrayList<>();
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	@OnDelete(action= OnDeleteAction.CASCADE)
    private List<Commentbads> commentbads = new ArrayList<>();
	
	public Accounts() {};
	public Accounts(String _pass, String _username, String _nickname) {
		Password = _pass;
		Username = _username;
		Nickname = _nickname;
	}
}

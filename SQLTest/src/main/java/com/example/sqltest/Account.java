package com.example.sqltest;

//Account 테이블 정의

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int User_ID;
	
	@Column(nullable=false)
	private String password;
	
	@Column(nullable=false)
	private String username;
	
	@Column
	private String nickname;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public Account() {};
	public Account(String _pass, String _username, String _nickname) {
		password = _pass;
		username = _username;
		nickname = _nickname;
	}


	public int GetUser_ID() {
		return User_ID;
	}
	public void SetUser_ID(int _id) {
		User_ID = _id;
	}
	public String Getpassword() {
		return password;
	}
	public String Getusername() {
		return username;
	}
	public String Getnickname() {
		return nickname;
	}
	public Timestamp Getcreated_at() {
		return created_at;
	}
	public void Setcreated_at(Timestamp _tm) {
		created_at = _tm;
	}
}

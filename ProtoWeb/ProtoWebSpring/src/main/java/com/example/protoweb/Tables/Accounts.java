package com.example.protoweb.Tables;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Accounts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int User_ID;

	@Column
	private String Username;
	
	@Column
	private String Password;
	
	@Column
	private String Nickname;
	
	@CreationTimestamp
	private Timestamp created_at;
	
	public Accounts() {};
	public Accounts(String _pass, String _username, String _nickname) {
		Password = _pass;
		Username = _username;
		Nickname = _nickname;
	}
}

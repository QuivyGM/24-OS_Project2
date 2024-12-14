package com.example.protoweb.Images;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import com.mysql.cj.jdbc.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Images {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //자동으로 1씩 증가하면서 배정
	private int id;
	
	@Lob
	private byte[] Image;
	
	@CreationTimestamp
	private Timestamp created_at;

	public Images() {}
	public Images(byte[] _Image) {
		Image = _Image;
	}
}

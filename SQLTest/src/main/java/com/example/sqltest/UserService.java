package com.example.sqltest;

//트랜잭션 클래스 : 동시에 데이터베이스 조회가 일어날 때 순서를 관리하는 클래스

import jakarta.transaction.Transactional;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@Transactional
public class UserService {
	@Autowired
	private JPARepository jparepository;
	public String save(Account ac) {
		jparepository.save(ac);
		return ac.Getusername();
	}
	public Iterable <Account> findAll() {
		return jparepository.findAll();
	}
	public Optional<Account> findById(int _id) {
		return jparepository.findById(_id);
	}
	public void DeleteById(int _id) {
		jparepository.deleteById(_id);
	}
}

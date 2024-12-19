package com.example.protoweb.tokens;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TokensService {
	@Autowired
    private TokensRepository Sv;

	@Transactional
	public String save(Tokens tok) {
		Sv.save(tok);
		return "Ok";
	}
	
	@Transactional
	public boolean findByUserId(int _user) {
		return Sv.findByUserId(_user);
	}
	
	@Transactional
	public List<Tokens> findBytoken(String _tk) {
		return Sv.findBytoken(_tk);
	}
	@Transactional
	public String deleteAllById(int _id) {
		Sv.deleteById(_id);
		return "Ok";
	}
}

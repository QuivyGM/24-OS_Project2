package com.example.protoweb.tokens;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TokensRepository extends JpaRepository<Tokens, Integer> {
	public boolean findByUserId(int ac);
	public List<Tokens> findBytoken(String tk);
}

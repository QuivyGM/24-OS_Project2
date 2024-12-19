package com.example.protoweb.Accounts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface AccountsRepository extends JpaRepository<Accounts, Integer> {
	public List<Accounts> findByUsername(String _name);
	public boolean existsByusername(String username);
	public boolean existsBynickname(String username);
	public boolean existsByusernameAndPassword(String username, String pass);
	public List<Accounts> findByusernameAndPassword(String username, String pass);
}
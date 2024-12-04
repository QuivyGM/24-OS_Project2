package com.example.protoweb.Accounts;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountsService {
	@Autowired
    private AccountsRepository Sv;
	
	@Transactional(readOnly = true)
	public List<Accounts> findAll() {
		List<Accounts> acc = Sv.findAll();
		return acc;
	}
	
	@Transactional
	public String save(String pass, String un, String nn) {
		Sv.save(new Accounts(pass,un,nn));
		return "Ok";
	}
	
	@Transactional
	public String save(Accounts ac) {
		Sv.save(ac);
		return "Ok";
	}

	@Transactional
	public Accounts findById(int _id) {
		Optional<Accounts> tmp = Sv.findById(_id);
		return tmp.get();
	}
	
	@Transactional
	public String deleteById(int Id) {
		Sv.deleteById(Id);
		return "Ok";
	}
}

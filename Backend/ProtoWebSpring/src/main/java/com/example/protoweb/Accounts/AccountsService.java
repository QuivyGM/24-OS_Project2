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
		if(tmp.isPresent())
			return tmp.get();
		else
			return null;
	}
	
	@Transactional
	public List<Accounts> findByUsername(String _name) {
		List<Accounts> tmp = Sv.findByUsername(_name);
		return tmp;
	}
	
	@Transactional
	public List<Accounts> findByusernameAndPassword(String _name, String _pass) {
		List<Accounts> tmp = Sv.findByusernameAndPassword(_name, _pass);
		return tmp;
	}
	
	@Transactional
	public boolean existsByusername(String _name) {
		boolean tmp = Sv.existsByusername(_name);
		return tmp;
	}
	@Transactional
	public boolean existsBynickname(String _name) {
		boolean tmp = Sv.existsBynickname(_name);
		return tmp;
	}
	@Transactional
	public boolean existsByusernameAndPassword(String _name, String _pass) {
		boolean tmp = Sv.existsByusernameAndPassword(_name, _pass);
		return tmp;
	}
	
	@Transactional
	public String deleteById(int Id) {
		Sv.deleteById(Id);
		return "Ok";
	}
}

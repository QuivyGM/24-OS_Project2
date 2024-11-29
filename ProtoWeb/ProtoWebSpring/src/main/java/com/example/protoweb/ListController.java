package com.example.protoweb;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.protoweb.Tables.Accounts;

import JpaServices.AccountsService;

@RestController
public class ListController {
    private AccountsService ASv;

	public ListController(AccountsService accountsservice) {
		this.ASv = accountsservice;
	}
	@GetMapping("/Accounts")
	private Map<String, Object> view() {
		Map<String, Object> response = new HashMap<>();
		List<Accounts> fd = ASv.findAll();
		List<Map<String,Object>> ress = new ArrayList<>();
		
		for(int i = 0;i < fd.size();i++) {
			Map<String, Object> res = new HashMap<>();
			res.put("id", fd.get(i).getUser_ID());
			res.put("Password", fd.get(i).getPassword());
			res.put("Username", fd.get(i).getUsername());
			res.put("Nickname", fd.get(i).getNickname());
			res.put("Created_at", fd.get(i).getCreated_at());
			ress.add(res);
		}

		response.put("counts", fd.size());
		response.put("items", ress);
		System.out.println(ress);
		return response;
	}
	
	@PostMapping("/Post/Accounts")
	private String view2(@RequestBody Map<String, String> req) {
		ASv.save(req.get("Password"), req.get("Username"), req.get("Nickname"));
		return "Ok";
	}
}

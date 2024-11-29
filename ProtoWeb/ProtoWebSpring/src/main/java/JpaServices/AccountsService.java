package JpaServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Tables.Accounts;

import Repository.AccountsRepository;
import Repository.ProductsRepository;


@Service
public class AccountsService {
	@Autowired
    private AccountsRepository SAccountsRepository;
	@Autowired
    private ProductsRepository SProductsRepository;
	
	@Transactional(readOnly = true)
	public List<Accounts> findAll() {
		List<Accounts> acc = SAccountsRepository.findAll();
		return acc;
	}
	
	@Transactional
	public String save(String pass, String un, String nn) {
		SAccountsRepository.save(new Accounts(pass,un,nn));
		return "Ok";
	}
}

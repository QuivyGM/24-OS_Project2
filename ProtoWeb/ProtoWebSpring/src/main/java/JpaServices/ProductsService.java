/*package JpaServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.protoweb.Tables.Products;

import Repository.ProductsRepository;

@Service
public class ProductsService {
	@Autowired
    private ProductsRepository SProductRepository;
	
	@Transactional(readOnly = true)
	public List<Products> findAll() {
		List<Products> acc = SProductRepository.findAll();
		return acc;
	}
	
	@Transactional
	public String save(String name, int price, String desc) {
		SProductRepository.save(new Products(name,price,desc));
		return "Ok";
	}

}
*/
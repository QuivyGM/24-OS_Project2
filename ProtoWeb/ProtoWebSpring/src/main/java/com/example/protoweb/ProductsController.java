/*package com.example.protoweb;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.protoweb.Tables.Products;

import JpaServices.ProductsService;

@RestController
public class ProductsController {
    private ProductsService Sv;

	public ProductsController(ProductsService productsservice) {
		this.Sv = productsservice;
	}
	
	@GetMapping("/Products")
	private Map<String, Object> view() {
		Map<String, Object> response = new HashMap<>();
		List<Products> fd = Sv.findAll();
		List<Map<String,Object>> ress = new ArrayList<>();
		
		for(int i = 0;i < fd.size();i++) {
			Map<String, Object> res = new HashMap<>();
			res.put("id", fd.get(i).getUser_ID());
			res.put("Name", fd.get(i).getName());
			res.put("Price", fd.get(i).getPrice());
			res.put("Description", fd.get(i).getDescription());
			res.put("Created_at", fd.get(i).getCreated_at());
			ress.add(res);
		}

		response.put("counts", fd.size());
		response.put("items", ress);
		System.out.println(ress);
		return response;
	}
	
	@PostMapping("/Post/Products")
	private String view2(@RequestBody Map<String, Object> req) {
		Sv.save(req.get("Name").toString(), Integer.valueOf(req.get("Price").toString()), req.get("Description").toString());
		return "Ok";
	}

}
*/
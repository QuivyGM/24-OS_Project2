package com.example.protoweb;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.CloseableThreadContext.Instance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.protoweb.Accounts.Accounts;
import com.example.protoweb.Accounts.AccountsService;
import com.example.protoweb.Comments.CommentbadsService;
import com.example.protoweb.Comments.CommentgoodsService;
import com.example.protoweb.Comments.Comments;
import com.example.protoweb.Comments.CommentsService;
import com.example.protoweb.Images.ImagesService;
import com.example.protoweb.PlantRatings.PlantRatingsService;
import com.example.protoweb.Plants.Plants;
import com.example.protoweb.Plants.PlantsService;
import com.example.protoweb.Posts.PostbadsService;
import com.example.protoweb.Posts.PostgoodsService;
import com.example.protoweb.Posts.Posts;
import com.example.protoweb.Posts.PostsService;
import com.example.protoweb.Products.Products;
import com.example.protoweb.Products.ProductsService;
import com.example.protoweb.tokens.Tokens;
import com.example.protoweb.tokens.TokensService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ListController {
	@Autowired
    private AccountsService sv;
	@Autowired
    private ProductsService sv2;
	@Autowired
    private ImagesService imgser;
	@Autowired
    private PostsService postser;
	@Autowired
    private PostgoodsService postgoodsser;
	@Autowired
    private PostbadsService postbadsser;
	@Autowired
    private PlantsService plantser;
	@Autowired
    private PlantRatingsService plantratingser;
	@Autowired
    private CommentsService commentsser;
	@Autowired
    private CommentgoodsService commentgoodsser;
	@Autowired
    private CommentbadsService commentbadsser;
	@Autowired
    private TokensService tokenser;
	
	@GetMapping("/api/Accounts")
	private Map<String, Object> view() {
		Map<String, Object> response = new HashMap<>();
		List<Accounts> fd = sv.findAll();
		List<Map<String,Object>> ress = new ArrayList<>();
		
		for(int i = 0;i < fd.size();i++) {
			Map<String, Object> res = new HashMap<>();
			res.put("id", fd.get(i).getId());
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
	
	@PostMapping("/api/Accounts")
	private String view2(@RequestBody Map<String, String> req) {
		sv.save(req.get("Password"), req.get("Username"), req.get("Nickname"));
		return "Ok";
	}
	
	/*@DeleteMapping("/api/Accounts")
	private String DeleteAccounts(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("id"));
		
		
		sv.deleteById((int)req.get("id"));
		return "Ok";
	}*/
	
	@PostMapping("/api/Comments")
	private String SetComments(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("user_id"));
		if(ac == null)
			return "Not Found User";
		Posts pt = postser.findById((int)req.get("post_id"));
		if(pt == null)
			return "Not Found Post";
		
		pt.setCommentsCount(pt.getCommentsCount() + 1);
		commentsser.save(req.get("body").toString(),ac,pt);
		return "Ok";
	}
	
	@DeleteMapping("/api/Comments")
	private String DeleteComments(@RequestBody Map<String, Object> req) {
		Comments ct = commentsser.findById((int)req.get("id"));
		if(ct == null) return "Not Found Comment";
		
		ct.getPost().setCommentsCount(ct.getPost().getCommentsCount() - 1);
		commentsser.deleteById((int)req.get("id"));
		return "Ok";
	}
	
	@PostMapping("/api/Commentgoods")
	private String SetCommentgoods(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("user_id"));
		if(ac == null) return "Not Found User";
		
		Comments pt = commentsser.findById((int)req.get("comment_id"));
		if(pt == null) return "Not Found Comment";

		if (commentbadsser.existUAP(ac.getId(), pt.getId())) return "already rated";
		if (commentgoodsser.existUAP(ac.getId(), pt.getId())) return "already rated";

		pt.setGood(pt.getGood() + 1);
		pt.setLikes(pt.getLikes() + 1);
		commentgoodsser.save(ac, pt);
		return "Ok";
	}
	
	@PostMapping("/api/Commentbads")
	private String SetCommentbads(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("user_id"));
		if(ac == null) return "Not Found User";
		
		Comments pt = commentsser.findById((int)req.get("comment_id"));
		if(pt == null) return "Not Found Comment";

		if (commentbadsser.existUAP(ac.getId(), pt.getId())) return "already rated";
		if (commentgoodsser.existUAP(ac.getId(), pt.getId())) return "already rated";

		pt.setBad(pt.getBad() + 1);
		pt.setLikes(pt.getLikes() - 1);
		commentbadsser.save(ac, pt);
		return "Ok";
	}
	
	@PostMapping("/api/Plants")
	private String SetPlants(@RequestBody Map<String, Object> req) {
		if(imgser.isExist((int)req.get("Imgid"))) {
			String json = "";
			try {
				json = new ObjectMapper().writeValueAsString(req.get("Features"));
			} catch (JsonProcessingException e) {
				e.printStackTrace();
				return "Error";
			}
			plantser.save(req.get("Name").toString(),(int)req.get("Imgid") ,req.get("Description").toString(), json,(int)req.get("Price"));
			
			return "Ok";
		} else {
			return "Not Found Image";
		}
	}
	
	@PostMapping("/api/PlantRatings")
	private String SetPlantRatings(@RequestBody Map<String, Object> req) {
			Accounts ac = sv.findById((int)req.get("user_id"));
			if(ac == null) return "Not Found User";
			Plants pl = plantser.findById((int)req.get("plant_id"));
			if(pl == null) return "Not Found Plant";
			
			pl.setRating(pl.getRating() + (int)req.get("rating"));
			pl.setRatingCount(pl.getRatingCount() + 1);
			pl.setAvgRating(Math.floor(pl.getRating() * 100.0 / pl.getRatingCount()) / 100.0);
			plantratingser.save((int)req.get("rating"), ac, pl);
			return "Ok";
	}
	
	@PostMapping("/api/Posts")
	private String SetPosts(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("user_id"));
		if(ac == null) return "Not Found User";
		postser.save(req.get("title").toString(), req.get("body").toString(), "NULL", ac);
		return "Ok";
	}
	
	@DeleteMapping("/api/Posts")
	private String DeletePosts(@RequestBody Map<String, Object> req) {
		Posts pt = postser.findById((int)req.get("id"));
		if(pt == null) return "Not Found Post";
		
		postser.deleteById((int)req.get("id"));
		return "Ok";
	}
	
	@PostMapping("/api/Postgoods")
	private String SetPostgoods(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("user_id"));
		if(ac == null) return "Not Found User";
		
		Posts pt = postser.findById((int)req.get("post_id"));
		if(pt == null) return "Not Found Post";

		if (postbadsser.existUAP(ac.getId(), pt.getId())) return "already rated";
		if (postgoodsser.existUAP(ac.getId(), pt.getId())) return "already rated";

		pt.setGood(pt.getGood() + 1);
		pt.setLikes(pt.getLikes() + 1);
		postgoodsser.save(ac, pt);
		return "Ok";
	}
	
	@PostMapping("/api/Postbads")
	private String SetPostbads(@RequestBody Map<String, Object> req) {
		Accounts ac = sv.findById((int)req.get("user_id"));
		if(ac == null) return "Not Found User";
		Posts pt = postser.findById((int)req.get("post_id"));
		if(pt == null) return "Not Found Post";
		
		if (postbadsser.existUAP(ac.getId(), pt.getId())) return "already rated";
		if (postgoodsser.existUAP(ac.getId(), pt.getId())) return "already rated";

		pt.setBad(pt.getBad() + 1);
		pt.setLikes(pt.getLikes() - 1);
		postbadsser.save(ac, pt);
		return "Ok";
	}
	
	@GetMapping("/api/Products")
	private Map<String, Object> view3() {
		Map<String, Object> response = new HashMap<>();
		List<Products> fd = sv2.findAll();
		List<Map<String,Object>> ress = new ArrayList<>();
		
		for(int i = 0;i < fd.size();i++) {
			Map<String, Object> res = new HashMap<>();
			res.put("id", fd.get(i).getId());
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
	
	@PostMapping("/api/Products")
	private String view4(@RequestBody Map<String, Object> req) {
		sv2.save(req.get("Name").toString(), (Integer)req.get("Price"), req.get("Description").toString());
		return "Ok";
	}

	@GetMapping("/MyAccount")
	private Map<String,Object> SiteMyAccount(@RequestParam(value="token") String tk) {
		List<Tokens> ac = tokenser.findBytoken(tk);
		Map<String, Object> res = new HashMap<>();
		if(ac.size() == 0 || ac == null) {
			res.put("Error", "Not Found User");
			return res;
		}
		
		res.put("email", ac.getFirst().getUser().getUsername());
		res.put("nickname", ac.getFirst().getUser().getNickname());
		
		return res;
	}
	
	@GetMapping("/MyPostsAndComments")
	private Map<String,Object> SiteMyPostsAndComments(@RequestParam(value="token") String tk) {
		List<Tokens> ac = tokenser.findBytoken(tk);
		Map<String, Object> res = new HashMap<>();
		if(ac.size() == 0 || ac == null) {
			res.put("Error", "Not Found User");
			return res;
		}
		/*if(ac.getFirst().getCreated_at().getTime() + 72000 < System.currentTimeMillis()) {
			res.put("Error", "세션 시간 초과");
			res.put("Current", System.currentTimeMillis());
			res.put("expire", ac.getFirst().getCreated_at().getTime());
			tokenser.deleteAllById(ac.getFirst().getId());
			return res;
		}*/
		
		List<String> plres = new ArrayList<>();
		int itr = ac.getFirst().getUser().getPosts().size();
		for(int i = 0;i < itr;i++) {
			plres.add("http://localhost:8080/Post/" + ac.getFirst().getUser().getPosts().get(i).getId());
		}
		res.put("postlists", plres);

		List<String> clres = new ArrayList<>();
		itr = ac.getFirst().getUser().getComments().size();
		for(int i = 0;i < itr;i++) {
			clres.add(ac.getFirst().getUser().getComments().get(i).getBody());
		}
		res.put("commentlist", clres);
		
		return res;
		
	}
	
	@GetMapping("/image")
	private ResponseEntity<?> reimg(@RequestParam(value="id") int imageName) {
		return new ResponseEntity<>(imgser.findById(imageName), HttpStatus.OK); 
	}
	
	@PostMapping("/Login")
	private Map<String, Object> Login(@RequestBody Map<String, Object> req) {
		Map<String, Object> res = new HashMap<>();
		
		boolean uex = sv.existsByusername(req.get("email").toString());
		boolean pex = sv.existsByusernameAndPassword(req.get("email").toString(), req.get("pw").toString());
		
		if(uex == false) {
			res.put("Error", "Not Found User");
			return res;
		}
		if(pex == false) {
			res.put("Error", "Incorrect Password");
			return res;
		}
		
		char[] ttk = new char[255];
		for(int i = 0;i < 255;i++) {
			ttk[i] = (char)(Math.random() * 9 + 48);
		}
		
		String ttks = String.copyValueOf(ttk);
		Tokens tk = new Tokens(ttks,sv.findByUsername(req.get("email").toString()).getFirst());
		tokenser.save(tk);
		res.put("token", ttks);
		
		return res;
	}
	
	@GetMapping("/Plants")
	private Map<String,Object> SitePlants() {
		Map<String,Object> res = new HashMap<>();
		Map<String,Object> resMain = new HashMap<>();
		List<Plants> pllist = plantser.findFirst15OrderByAvgRating();
		if(pllist.size() == 0) {
			res.put("counts", 0);
			return res;
		}
		List<Map<String,Object>> getpl = new ArrayList<>();
		resMain.put("title", pllist.get(0).getName());
		resMain.put("description", pllist.get(0).getDescription());
		resMain.put("plantimg", "http://localhost:8080/image?id=" + pllist.get(0).getImgId());
		try {
			resMain.put("features", new ObjectMapper().readValue(pllist.get(0).getFeature(), LinkedHashMap.class));
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		res.put("main", resMain);
		res.put("counts", pllist.size());
		int itr = pllist.size();
		for(int i = 0;i < itr;i++) {
			Map<String,Object> tmp = new HashMap<>();
			tmp.put("plantimg","http://localhost:8080/image?id=" + pllist.get(i).getImgId());
			tmp.put("title",pllist.get(i).getName());
			tmp.put("rating",pllist.get(i).getAvgRating());
			getpl.add(tmp);
		}
		res.put("plantlists", getpl);
		return res;
	}
	
	@GetMapping("/Post/{id}")
	private Map<String, Object> SitePost(@PathVariable("id") String id) {
		Map<String, Object> res  = new HashMap<>();
		Posts pt = postser.findById(Integer.parseInt(id));
		if(pt == null) {
			res.put("Error", "Not Found Post");
			return res;
		}
		Timestamp tm = pt.getCreated_at();
		SimpleDateFormat Form = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss");
		String tms = Form.format(tm);
		
		res.put("content", pt.getBody());
		res.put("title", pt.getTitle());
		res.put("like", pt.getLikes());
		res.put("time", tms);
		res.put("user", pt.getUser().getUsername());
		
		List<Map<String,Object>> lres = new ArrayList<>();
		int itr = pt.getComments().size();
		for(int i = 0;i < itr;i++) {
			Map<String, Object> tres = new HashMap<>();
			tres.put("username", pt.getComments().get(i).getUser().getUsername());
			tres.put("comment", pt.getComments().get(i).getBody());
			Timestamp ttm = pt.getCreated_at();
			SimpleDateFormat tForm = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss");
			String ttms = tForm.format(ttm);
			tres.put("time", ttms);
			lres.add(tres);
		}
		res.put("commentlist", lres);
		
		return res;
	}
	
	@GetMapping("/Posts")
	private List<Map<String,Object>> SitePosts() {
		List<Map<String,Object>> lres = new ArrayList<>();
		List<Posts> pts = postser.findAllByOrderByIdDesc();
		int itr = pts.size();
		for(int i = 0;i < itr;i++) {
			Map<String, Object> tres = new HashMap<>();
			Posts pt = pts.get(i);
			tres.put("username", pt.getUser().getUsername());
			tres.put("title", pt.getTitle());
			if(pt.getBody().length() > 34)
				tres.put("contents", pt.getBody().substring(0, 34) + "...");
			else
				tres.put("contents", pt.getBody());
			tres.put("answernum", pt.getCommentsCount());
			Timestamp ttm = pt.getCreated_at();
			SimpleDateFormat tForm = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss");
			String ttms = tForm.format(ttm);
			tres.put("time", ttms);
			tres.put("id", pt.getId());
			lres.add(tres);
		}
		
		return lres;
	}
	
	@GetMapping("/Shop")
	private Map<String,Object> SiteShop() {
		Map<String,Object> res = new HashMap<>();
		Map<String,Object> resMain = new HashMap<>();
		List<Plants> pllist = plantser.findFirst4OrderByAvgRating();
		if(pllist.size() == 0) {
			res.put("counts", 0);
			return res;
		}
		List<Map<String,Object>> getpl = new ArrayList<>();
		resMain.put("title", pllist.get(0).getName());
		resMain.put("description", pllist.get(0).getDescription());
		resMain.put("price", pllist.get(0).getPrice());
		resMain.put("plantimg", "http://localhost:8080/image?id=" + pllist.get(0).getImgId());
		try {
			resMain.put("features", new ObjectMapper().readValue(pllist.get(0).getFeature(), LinkedHashMap.class));
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		res.put("main", resMain);
		res.put("counts", pllist.size());
		int itr = pllist.size();
		for(int i = 0;i < itr;i++) {
			Map<String,Object> tmp = new HashMap<>();
			tmp.put("plantimg","http://localhost:8080/image?id=" + pllist.get(i).getImgId());
			tmp.put("title",pllist.get(i).getName());
			tmp.put("price",pllist.get(i).getPrice());
			getpl.add(tmp);
		}
		res.put("plantlists", getpl);
		return res;
	}
	
	@PostMapping("/SignUp")
	private String SiteSignup(@RequestBody Map<String, Object> req) {
		if(req.get("name") == null || req.get("name").toString() == "") return "Username is must not null";
		if(req.get("email") == null || req.get("email").toString() == "") return "Email is must not null";
		if(req.get("pw") == null || req.get("pw").toString() == "") return "Password is must not null";
		if(req.get("checkpw") == null || req.get("checkpw").toString() == "") return "Password Check is must not null";
		if(!req.get("pw").toString().equals(req.get("checkpw").toString())) return "Password Check is incorrect";
		
		Accounts ac = new Accounts(req.get("pw").toString(),req.get("email").toString(),req.get("name").toString());
		sv.save(ac);
		
		return "Ok";
	}
	
	@GetMapping("/")
	private Map<String,Object> SiteMain() {
		Map<String,Object> res = new HashMap<>();
		
		//식물 로드
		Map<String,Object> resMain = new HashMap<>();
		List<Plants> pllist = plantser.findFirst4OrderByAvgRating();
		if(pllist.size() == 0) {
			res.put("counts", 0);
			return res;
		}
		List<Map<String,Object>> getpl = new ArrayList<>();
		resMain.put("title", pllist.get(0).getName());
		resMain.put("description", pllist.get(0).getDescription());
		resMain.put("plantimg", "http://localhost:8080/image?id=" + pllist.get(0).getImgId());
		try {
			resMain.put("features", new ObjectMapper().readValue(pllist.get(0).getFeature(), LinkedHashMap.class));
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		res.put("main", resMain);
		res.put("counts", pllist.size());
		for(int i = 0;i < pllist.size();i++) {
			Map<String,Object> tmp = new HashMap<>();
			tmp.put("plantimg","http://localhost:8080/image?id=" + pllist.get(i).getImgId());
			tmp.put("title",pllist.get(i).getName());
			tmp.put("price",pllist.get(i).getPrice());
			getpl.add(tmp);
		}
		res.put("plantlists", getpl);
		
		//포스트 로드
		Map<String,Object> resMaincomm = new HashMap<>();
		List<Posts> ptlist = postser.findTopByOrderByLikesDesc();
		resMaincomm.put("username", ptlist.get(0).getUser().getUsername());
		resMaincomm.put("description", ptlist.get(0).getBody());
		resMaincomm.put("Likes", ptlist.get(0).getLikes());
		res.put("comments", resMaincomm);
		return res;
	}
	
	@GetMapping("/upimage")
	private String stimg(@RequestParam(value="path") String imageName) {
		Resource resource = new FileSystemResource(imageName);
		try {
			imgser.save(resource.getInputStream().readAllBytes());
			return "Ok";
		} catch (Exception e) {
			e.printStackTrace();
			return "Failed";
		}
	}
}

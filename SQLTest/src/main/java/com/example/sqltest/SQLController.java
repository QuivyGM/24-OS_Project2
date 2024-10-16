package com.example.sqltest;

import java.sql.Timestamp;
import java.util.Iterator;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

//컨트롤러

@Controller
public class SQLController {
	private UserService userservice;
	public SQLController(UserService us) {
		userservice = us;
	}
	@PostMapping("/sql")
	@ResponseBody
	public String PostRet(@RequestBody Map<String,String> reqData) { //reqData 파라미터를 통해 Post요청의 json을 받는다
		Account tp;
		String retstr = "<tr><td>User_ID</td><td>password</td><td>username</td><td>nickname</td><td>created_at</td></tr>";
		switch(reqData.get("request")) {
		case "DeleteData": //데이터베이스 데이터 삭제
			userservice.DeleteById(Integer.parseInt(reqData.get("id")));
			return "OK";
		case "UpdateData": //데이터베이스 데이터 변경
			String inft[] = {reqData.get("id"),reqData.get("nickname"),reqData.get("username"),reqData.get("password")};
			Timestamp tmp = userservice.findById(Integer.parseInt(inft[0])).get().Getcreated_at();
			if(inft[0] == "" || inft[2] == "" || inft[3] == "")
				return "누락된 정보가 있습니다.";
			tp = new Account(inft[3],inft[2],inft[1]);
			tp.SetUser_ID(Integer.parseInt(inft[0]));
			tp.Setcreated_at(tmp);
			userservice.save(tp);
			return "OK";
		case "AddData": //데이터베이스 데이터 추가
			String info[] = {reqData.get("nickname"),reqData.get("username"),reqData.get("password")};
			if(info[1] == "" || info[2] == "")
				return "누락된 정보가 있습니다.";
			tp = new Account(info[2],info[1],info[0]);
			userservice.save(tp);
			return "OK";
		case "AllData": //데이터베이스 모든 데이터 리턴
			Iterator<Account> it = userservice.findAll().iterator();
			while(it.hasNext()) {
				tp = it.next();
				retstr += "<tr><td>" + tp.GetUser_ID() + "</td><td>" + tp.Getpassword() + "</td><td>" + tp.Getusername() + "</td><td>" + tp.Getnickname() + "</td><td>" + tp.Getcreated_at() + "</td></tr>";
			}
			retstr += "";
			break;
		}
		
		return retstr;
	}
}

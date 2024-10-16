import React, {useEffect,useState} from 'react';
import axios from 'axios';

function App() {
	const [hello, sethello] = useState("");
	
	const BaseUrl = "http://localhost:8080";
	
	async function getData() {
		await axios.post(BaseUrl + "/sql",{"request":"AllData"})
		.then((response) => {document.getElementById("output").innerHTML = response.data;})
		.catch((error) => {console.error(error);});
		
	}
	
	async function addData() {
		await axios.post(BaseUrl + "/sql",{"request":"AddData", 
			"password":document.getElementById("password").value,
			"nickname":document.getElementById("nickname").value,
			"username":document.getElementById("username").value})
		.then((response) => {SQLResult(response.data);})
		.catch((error) => {console.error(error);});	
	}
	async function updateData() {
			await axios.post(BaseUrl + "/sql",{"request":"UpdateData", 
				"password":document.getElementById("password").value,
				"nickname":document.getElementById("nickname").value,
				"username":document.getElementById("username").value,
				"id":document.getElementById("id").value})
			.then((response) => {SQLResult(response.data);})
			.catch((error) => {console.error(error);});	
	}

	async function DeleteData() {
		await axios.post(BaseUrl + "/sql",{"request":"DeleteData", 
			"id":document.getElementById("id").value})
		.then((response) => {SQLResult(response.data);})
		.catch((error) => {console.error(error);});	
	}
		
	function SQLResult(data) {
		if(data === "OK")
			getData();
		else
			document.getElementById("info").innerText = data;
	}
	
  return (
    <div className="App">
      <header className="App-header">	
	  <style>{`
	    table, tr, td{
	     border:1px solid black;
	    }
	  `}</style>
		<p>ID : </p><input id="id"/>
        <p>유저명 : </p><input id="username"/>
	  	<p>별명 : </p><input id="nickname"/>
		<p>비밀번호 : </p><input id="password"/>
		<p id="info">정보</p>
		<button id="btn" onClick={() => addData()}>추가</button>
		<button id="btn" onClick={() => updateData()}>변경</button>
		<button id="btn" onClick={() => getData()}>목록</button>
		<button id="btn" onClick={() => DeleteData()}>삭제</button>
      </header>
	  <table id="output">
	  </table>
    </div>
  );
}

export default App;

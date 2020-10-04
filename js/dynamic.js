//XMLHttpRequest(AJAX Call)
document.write("dynamic page");
function getJson(file,callback){
	var xhr_req=new XMLHttpRequest();
	xhr_req.overrideMimeType("application/json");
	xhr_req.open("GET",file,true);
	xhr_req.onreadystatechange=function(){
		if(xhr_req.readyState=="4" && xhr_req.status===200)
			callback(xhr_req.responseText);
	}
	xhr_req.send();
}

// passing data to function

getJson("./data/dynamic.json",function(text){
var d=JSON.parse(text);
console.log(d.details);
t_details(d.details);
})

var main=document.querySelector("#parent-div");

function t_details(SDC){
	var name=document.createElement("h1");
	name.textContent=SDC.name;
}
// var a = "78sai";
// var b = "34ram";
// document.write(parseInt(a)+parseInt(b))
// console.log("hello");

// creating objects

var details={
	name:"K.swami",
	email:"swami.k@apssdc.in",
	experience:"5 years in apssdc",
	courses:["webdesign using reactjs","python","data analysis"]
}

// for loop for object

for (var i = 0; i < details.courses.length; i++) {
	document.writeln(details.courses[i]+"<br>")
}
document.write(details.name,"<br>");

// for-in loop 

var a = "Apssdc React";
for(var i in a){
	document.writeln(a[i]+"<br>");
}


for (var i in details){
	document.write(details[i]+"<br>")
}

// for of loop we use can only strings,arrays not the objects

for (var i of details.courses){
	document.writeln(i);
}
var s = "123456"

for (var i of s){
	document.write(i);
}

// user defined functions
function add(){
	var details={
	name:"K.swami",
	email:"swami.k@apssdc.in",
	experience:"5 years in apssdc",
	courses:["webdesign using reactjs","python","data analysis"]
}
for (var i in details){
	document.write(details[i]+"<br>")
}
}
add();
add();

function Change(){
	var b=document.getElementById("para");
    b.textContent="hello";
}

// Arrow function

// function sai(a,b){
// 	alert(a+b);
// }
// sai(99,1);

var sai=(a,b)=>{
alert(a-b);
}
sai(40,5);

// if function without params
()=>{
}

// differences between var,let,const

var r1=10;
var r1=40; //reAssign
document.write(r1,"<br>");
{
	var r1=20;
	document.write(r1,"<br>");
}
document.write(r1,"<br>");

let r=10;
{
	let r=20;
	document.write(r,"<br>");
}
document.write(r,"<br>");

const r2=10;
{
	const r2=20;
	document.write(r2,"<br>");
}
document.write(r2,"<br>");
function Change(){
	var b=document.getElementById("para").innerHTML="helllo";
	b.textContent="helllo";
}
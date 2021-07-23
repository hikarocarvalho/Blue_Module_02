
var message ={
	name:"",
	email:"",
	telphone:"",
	message:"",
};
const messages = [];
const jsonfile = "../js/messages.json";
function grow(){
	document.getElementById("text").style.height="100px";
}
function read(){
	messages.push(JSON.parse(jsonfile));
}
function write(){
	read();
	message.name = document.getElementById("input_name").value;
	message.name = document.getElementById("input_email").value;
	message.name = document.getElementById("input_telphone").value;
	message.name = document.getElementById("input_message").value;
	console.log(message);
	messages.push(message);
	var dict = JSON.stringify(messages)
	var dictstring = JSON.parse(dict);
	var fs = require('fs');
	fs.writeFile(jsonfile, dictstring, function(err, result) {
   		if(err) console.log('error', err);
	});
	document.getElementById('contact').innerHTML='<h1 style='+'color:white;margin-top:20%;'+'>Mensagem Enviada<h1>';
}
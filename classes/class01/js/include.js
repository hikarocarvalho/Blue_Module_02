
var message ={
	method: 'POST',
	name:"",
	email:"",
	message:"",
};
var url = "../pgs/send.php";
function grow(){
	document.getElementById("message").style.height="90%"
	
	document.getElementById("text").style.height="30%";
}
function write(){
	message.name = document.getElementById("input_name").value;
	message.email = document.getElementById("input_email").value;
	message.message = document.getElementById("input_message").value;
	console.log(message);
	console.log(url);
	fetch(url,message).then(function(response){
			console.log(response.json());
			document.getElementById('form').innerHTML='<h1 style='+'color:black;margin-top:20%;'+'>Mensagem Enviada<h1>';
		})
		.catch(function(error){
			console.log(error);
		}); 
}



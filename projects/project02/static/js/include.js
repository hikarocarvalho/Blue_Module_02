
function grow(){
	document.getElementById("message").style.height="90%"
	
	document.getElementById("input_message").style.height="30%";
}
function hide(){
	if (x.matches){
		document.getElementById("items").style.display="none";
	}
	console.log("chegou aqui")
}
var x = window.matchMedia("(max-width: 1024)");



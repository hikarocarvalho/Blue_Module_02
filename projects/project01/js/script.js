function change(value){
	if(value == "happy" || value == "angry"){
		document.getElementById("luffy").style.width = "100%"; 
		document.getElementById("luffy").style.height = "auto"; 
		document.getElementById("luffy").style.left = "0"; 
		document.getElementById("name").innerHTML = "Monkey D' Luffy "+value;
		if(value=="angry"){
			document.getElementById("name").style.color="red";
		}
		else{
			document.getElementById("name").style.color="lime";
		}
	}else{
		document.getElementById("luffy").style.width = "50%"; 
		document.getElementById("luffy").style.height = "auto%"; 
		document.getElementById("luffy").style.left = "10%"; 
		document.getElementById("name").innerHTML = "Monkey D' Luffy "+value;
		if(value=="idiot"){
			document.getElementById("name").style.color="blue";
		}
		else{
			document.getElementById("name").style.color="yellow";
		}
	}
	document.getElementById("luffy").src="imgs/"+value+".png";
	console.log("img/"+value+".png");
	return 0;
}

function load(){
	vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	console.log(vw +" "+ vh);
}
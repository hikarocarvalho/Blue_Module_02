function change(value){
	document.getElementById("html").style.display="none";
	document.getElementById("cpp").style.display="none";
	document.getElementById("python").style.display="none";
	document.getElementById(value).style.display="flex";
	if(value === "python"){
		document.getElementById("pypj01").style.display="flex";
		document.getElementById("pypj02").style.display="none";
		document.getElementById("pypj03").style.display="none";
		document.getElementById("pypj04").style.display="none";
	}
}
function changesub(value){
	document.getElementById("pypj01").style.display="none";
	document.getElementById("pypj02").style.display="none";
	document.getElementById("pypj03").style.display="none";
	document.getElementById("pypj04").style.display="none";
	document.getElementById(value).style.display="flex";
}
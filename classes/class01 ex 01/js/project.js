function change(value){
	var lista = ['html','cpp','python'];
	for(int i=0;i<3;i++){
		document.getElementById(lista[i]).style.display="none";
	}
	document.getElementById(value).style.display="flex";
	if(value === "python"){
		lista = ['pypj01','pypj02','pypj03','pypj04'];
		for(int i=0;i<3;i++){
			document.getElementById(lista[i]).style.display="none";
		}
		document.getElementById(lista[0]).style.display="flex";
		}
}
function changesub(value){
	var lista = ['pypj01','pypj02','pypj03','pypj04'];
	for(int i=0;i<3;i++){
		document.getElementById(lista[i]).style.display="none";
	}
	document.getElementById(value).style.display="flex";
}
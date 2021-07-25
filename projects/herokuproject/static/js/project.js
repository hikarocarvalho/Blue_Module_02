function changevideo(valuesid,choice){
	console.log(valuesid);
	var valueinit = 0;
	var negative = 0;
	var verchoice =0;
	if(parseInt(valuesid)<0){
		valueinit = -1 * (parseInt(valuesid));
		negative = parseInt(valuesid);
		verchoice = 4 - valueinit;
		if(negative<-3){
			negative = 0;
			document.getElementById("about").dataset.value=negative;
		}else{
			document.getElementById("about").dataset.value=negative;
		}
	}else{
		valueinit = parseInt(valuesid);
		verchoice = valueinit;
	}
	if(valueinit > 3){
		valueinit = 0;
		verchoice = 0;
		negative = 0;
	}
	
	if(choice == 1){
		document.getElementById("" + verchoice + "").style.width="100%";
		
	}else{
		document.getElementById("" + verchoice + "").style.width="0%";
	}
	return valueinit
	
}
function forleft(){
    var valuesid = 0;
    valuesid = changevideo(document.getElementById("about").dataset.value,0);
    document.getElementById("about").dataset.value ++;
	valuesid = changevideo(document.getElementById("about").dataset.value,1);
	document.getElementById("about").dataset.value=valuesid;
    var angle = valuesid * 90;
	
    document.getElementById("project").style.transform="translate(0%,0%) rotate3d(0,-1, 0,"+ angle + "deg)";
    
    document.getElementById("about").style.transform="translate(0%,0%) rotate3d(0,1, 0, "+angle+"deg)";
        
    
}
function forright(){
	var valuesid = 0;
	valuesid = changevideo(document.getElementById("about").dataset.value,0);
    document.getElementById("about").dataset.value --;
	valuesid = changevideo(document.getElementById("about").dataset.value,1);
    var angle = valuesid * 90;

    document.getElementById("project").style.transform="translate(0%,0%) rotate3d(0,1, 0,"+ angle + "deg)";
    
    document.getElementById("about").style.transform="translate(0%,0%) rotate3d(0,-1, 0, "+angle+"deg)";       
}

//function change(value){
// 	var lista = ['html','cpp','python'];
// 	for(var i=0;i<3;i++){
// 		document.getElementById(lista[i]).style.display="none";
// 	}
// 	document.getElementById(value).style.display="flex";
// 	if(value === "python"){
// 		lista = ['pypj01','pypj02','pypj03','pypj04'];
// 		for(var f=0;f<3;f++){
// 			document.getElementById(lista[i]).style.display="none";
// 		}
// 		document.getElementById(lista[0]).style.display="flex";
// 		}
// }
// function changesub(value){
// 	var lista = ['pypj01','pypj02','pypj03','pypj04'];
// 	for(var i=0;i<3;i++){
// 		document.getElementById(lista[i]).style.display="none";
// 	}
// 	document.getElementById(value).style.display="flex";
// }
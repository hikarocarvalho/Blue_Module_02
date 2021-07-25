var valueup = 0;
var valuesid = 0;

function forright(){
    
    valuesid = document.getElementById("about").dataset.value;
    document.getElementById("about").dataset.value ++;
    if(valuesid == 3){
        document.getElementById("about").dataset.value = 0;
    }
    var angle = document.getElementById("about").dataset.value * 90;
    document.getElementById("project").style.transform="translate(0%,0%) rotate3d(0,-1, 0,"+ angle + "deg)";
    
    document.getElementById("about").style.transform="translate(0%,0%) rotate3d(0,1, 0, "+angle+"deg)";
        
    
}
function forleft(){
     
    valuesid = document.getElementById("about").dataset.value;
    document.getElementById("about").dataset.value --;
    if(valuesid == -3){
        document.getElementById("about").dataset.value = 0;
    }
    var angle = document.getElementById("about").dataset.value * 90;
    document.getElementById("project").style.transform="translate(0%,0%) rotate3d(0,1, 0,"+ angle + "deg)";
    
    document.getElementById("about").style.transform="translate(0%,0%) rotate3d(0,-1, 0, "+angle+"deg)";
        
}
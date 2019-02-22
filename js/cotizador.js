
function numeros(e){
	if(navigator.appName=='Microsoft Internet Explorer'){
		if (event.keyCode<48 || event.keyCode>57) {
			event.returnValue=false;
		}
	} else {
		evt = e ? e : event;
		tcl = (window.Event) ? evt.which : evt.keyCode;
		if(tcl==8||tcl==0) return true;
		if (tcl < 48 || tcl > 57 )//si no es numero 
			return false;
		else
			return true
	}
} 

$(document).ready(function () { 

    initPage();

	
});

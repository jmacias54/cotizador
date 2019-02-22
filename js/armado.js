function initPage(){
	
    var html_IOT = _planesIOT();
    var html_telefonia_nube = _planes_telefonia_nube ();
    var html_telefonia_movil= _planes_telefonia_movil();
    var html_planes_play = _planes_play();
	
	$("#telefonia_movil").fadeOut(function(){
		$(this).html(html_telefonia_movil).fadeIn('slow');
		// $("#loading").css('display','none');
		// window.scrollTo(0,0);
    });
    
    
	$("#tv_internet").fadeOut(function(){
		$(this).html(html_planes_play).fadeIn('slow');
		// $("#loading").css('display','none');
		// window.scrollTo(0,0);
    });
    
    $("#iot").fadeOut(function(){
		$(this).html(html_IOT).fadeIn('slow');
		// $("#loading").css('display','none');
		// window.scrollTo(0,0);
    });
    
    $("#telefonia_nube").fadeOut(function(){
		$(this).html(html_telefonia_nube).fadeIn('slow');
		// $("#loading").css('display','none');
		// window.scrollTo(0,0);
    });

    
	
}




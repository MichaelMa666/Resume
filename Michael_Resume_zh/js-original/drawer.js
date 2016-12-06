$(document).ready(function(){
    $("#drawer").click(function(){
    	if($("#mysidenav").css("left") == "-200px"){
    		$("#mysidenav").css("left","0px");
    	}
    	else{
    		$("#mysidenav").css("left","-200px");
    	}		        
    });
});
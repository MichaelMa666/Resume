/***********************************************************************
* 
*Tab Control
*
***********************************************************************/
function openContent(ev, col){

	$('.tabcontent').css("display", "none");

	$('.tablinks').removeClass("active");

	// document.getElementById(col).style.display = "block";
	$('#' + col).css("display", "block")

	ev.currentTarget.className += " active";

	/*if(col === '4'){
		google.maps.event.trigger(map, 'resize');
	}*/

	divSilde(col);
}

$('#defaultOpen')[0].click();

/************************************************************************
* 
* Tab Control slide
*
************************************************************************/
function divSilde(col){

	var mg_left = $('#ulbar li').first().offset().left - $('#ulbar').offset().left;
	
	console.log(mg_left);

	$('#vernier').css("left", (col - 1) * 100.8 + mg_left);
}
/*************************************************************************
 *
 * Click Skill button show.
 *
 *************************************************************************/
$('#SKbtn').one("click", function(){
	timer = 3000;
	var arrSkill = new Array;
	var arrWidth = new Array;
	var items = $('.label').length;
	var wd =parseInt($('.progress-wraper').css("width").slice(0, -2));

	for(var i = 0; i< items; i++){
		arrSkill.push(parseFloat($('.label')[i].innerHTML));
	}
	for(var i = 0; i < items; i ++){
		arrWidth.push(wd * arrSkill[i]/100);
	}
	for(var i = 0; i < items; i ++){
		
		$('#bar-'+i).animate({width: arrWidth[i] + 'px'},timer);	
	}
	for(var i = 0; i < items; i ++){
		(function(i){
			var id, counter = 0;
		    id = setInterval(function() {
		        $("#lab-"+i).text(counter++ + '%');
		        if (counter > arrSkill[i]) { clearInterval(id)};
		    }, timer/arrSkill[i]);
		})(i);
	}
	/*************************************************************************
	 *
	 * Circle process bar operate each element of class="circle-progress"
	 *
	 *************************************************************************/
	$('.circle-progress').each(function(){
		var val = parseInt($(this).find('strong').text().slice(0, -1));
		console.log(val);
		$(this).circleProgress({
		    value: val/100,
		    size: 80,
		    startAngle: -Math.PI/2,
		    fill: {
		        gradient: ["#00d4d4"]
		    },
		    animation:{
		    	duration:3000
		    },
		    lineCap: 'round'
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(parseInt(val * progress) + '<i>%</i>');
		});
	});
});
/******************************************************************************************
 *
 * Toggle between adding and removing the "active" and "show" classes when the user clicks 
 * on one of the "Section"  buttons.
 * The  "active" class is used to add a background color to the current button when its  
 * belonging panel is open. The "show" class is used to open the specific accordion panel 
 * 
 *******************************************************************************************/
$( "#acc" ).accordion({
	heightStyle: "content",
	collapsible: true,
	active: 0,
	icons: {'header': 'fa fa-toggle-up fa-lg', 'activeHeader': 'fa fa-toggle-down fa-lg' },
	activate: function( event, ui ) {
		/*click 后是打开的，$.isEmptyObject(ui.newHeader.offset())就返回false*/
		if(!$.isEmptyObject(ui.newHeader.offset())) {
			console.log(ui.newHeader.offset().top);
			$('#acc').animate({ scrollTop: ui.newHeader.offset().top - 183 }, 'slow');
		}
	}
});
/***************************************************************************************
 *
 * For the video button.
 *
 ***************************************************************************************/
$("#open-1").click(function() {
 	$("#video-demo").toggle( "slow" );
});

$("#open-2").click(function() {
    $("#video-project-test").toggle( "slow" );
});
$("#open-3").click(function() {
    $("#video-project-xyd").toggle( "slow" );
});
$("#open-4").click(function() {
    $("#video-project-mq").toggle( "slow" );
});

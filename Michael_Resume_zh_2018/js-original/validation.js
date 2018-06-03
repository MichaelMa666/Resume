/*******************************************************************************
 *
 * Validation for the message.
 *
 *******************************************************************************/
function validateEmail(email) {
    var re = /(\w)+[@](\w)+[.](\w)+/;
    return re.test(email);
}
$('#btn-send').click(function(){
 	// console.log($('#name').val());
 	var name = $('#name').val();
 	var mail = $('#email').val();
 	var message = $('#message').val();

 	if(name == ''){
 		$('.con-name span').css("display", "inline-block");
 		$('.con-name input').css('border-color', '#f29090');
 	}
 	else{
 		$('.con-name span').css("display", "none");
			$('.con-name input').css('border-color', '#dfe1e8');
 	}
 	if(mail != '' && validateEmail(mail)){
		$('.con-mail span').css("display", "none");
			$('.con-mail input').css('border-color', '#dfe1e8');			 	
 	}		 	
 	else{
 		if(mail == ''){
 			$('.con-mail span').text("Please fill the required field");
	 		$('.con-mail span').css("display", "inline-block");
 			$('.con-mail input').css('border-color', '#f29090');
 		}
 		else{
 			if(!validateEmail(mail)){
	 			$('.con-mail span').text("E-mail address seems invalid");
		 		$('.con-mail span').css("display", "inline-block");
		 		$('.con-mail input').css('border-color', '#f29090');
	 		}
 		}
 	}
 	if(message == ''){
 		$('.con-message span').css("display", "inline-block");
	 	$('.con-message textarea').css('border-color', '#f29090');
 	}
 	else {
 		$('.con-message span').css("display", "none");
			$('.con-message textarea').css('border-color', '#dfe1e8');
 	}
 	if(name != '' && validateEmail(mail) && message != ''){
 		setTimeout(function(){
 			$('.btn-area span').css("display", "inline-block");
 		},1000);
 		/*$.ajax{
 			type:"POST",
	      	url:"http://"+window.location.hostname+":port/route",
	      	async:false,
	      	cache:false,
	      	data:{NAME:name,MAIL:mail,MSG:message},
	      	error:function(err){
	      		
	      	},
	     	success:function(data){
	      		if(data.success){			
	      			
	      		}
	      		else{
	     			
	      		}
	      	}
 		}
 		*/
 	}
 	else{
 		$('.btn-area span').css("display", "none");
 	}
});
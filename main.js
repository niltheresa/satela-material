$(function (){
	$('#main_button').click(function (){
		var toggle = $('#main_button').attr("data-mfb-state");
		console.log(toggle, "TOOG");
		if(toggle == 'closed'){
			$('#main_button').attr('data-mfb-state', 'open');
		} else {
			$('#main_button').attr('data-mfb-state', 'closed');
		}
	});
});
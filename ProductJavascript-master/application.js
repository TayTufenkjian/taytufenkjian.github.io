$(document).ready(function(){
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$(".description").css("display", "none");
	$(". product .details").click(function(){
		$(".product .description").fadeIn(1000);
	});
});
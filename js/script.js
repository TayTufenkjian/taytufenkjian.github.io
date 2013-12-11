$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(1000);
  
  // Form for Pitch Madlib
  $("form").css("display", "none");
  $("#startPitch").click(function(){
  	$(this).fadeOut(500);
  	$("form").fadeIn(500);
  });
  // $("#submit").click(function(){
  // 	var firstNoun = $("input:text[name=firstNoun"]).val();
  // 	$("form").fadeOut(500);
  // 	$("startPitch").append("I'm a " + firstNoun);
  // });

//accordion menu for Thoughts page
  $(".menu").accordion({collapsible: true, active: false, heightStyle: "content"});   

//Nivo Slider for Projects page
$(window).load(function() {
    $("#slider").nivoSlider();
	});

});



// Personal Pitch Madlib
// I'm a (noun) looking for (noun) at a (adjective) company 
// where I can use my skills in (noun) to (verb).

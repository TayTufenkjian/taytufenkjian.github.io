$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(1000);

//accordion menu for Thoughts page
  $(".menu").accordion({collapsible: true, active: false, heightStyle: "content"});   

//Nivo Slider for Projects page
$(window).load(function() {
    $("#slider").nivoSlider();
	});

});



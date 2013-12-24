$(document).ready(function() { 
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  //Nivo Lightbox for Bookalokal page under Projects
  $('div.lightbox a').nivoLightbox();
  //accordion menu for Thoughts page
  $(".menu").accordion({collapsible: true, active: false, heightStyle: "content"});   

  



});




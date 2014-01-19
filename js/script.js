$(document).ready(function() { 

  $('body').css('display', 'none');
  $('body').fadeIn(1000);


  // smooth scroll for nav menu to anchor links
  $('nav a').click(function () {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 'slow');
    return false;
	});

  /* For Collapsible Nav Menu */
  /* prepend menu icon */
  $('#homeName').after('<div id="menu-icon"><img src="images/menu.png"/></div>');
  
  /* toggle nav */
   $('#menu-icon').on('click', function(){
    $('nav ul').slideToggle();
    $(this).toggleClass('active');
    $('nav ul').insertAfter('nav div.wrapper');
   });

   /* make sure nav appears and hides when resized on desktop*/
   $(window).resize(function() {
    if($(window).width() > 680) 
        $('nav ul').show();
    else $('nav ul').hide();
    });


  // Nivo Lightbox for Bookalokal page under Projects
  $('div.lightbox a').nivoLightbox();

});




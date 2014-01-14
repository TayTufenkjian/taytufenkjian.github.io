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
  $('#homeName').after('<div id="menu-icon">Menu</div>');
  
  /* toggle nav */
  $('#menu-icon').on('click', function(){
    $('#navSections').slideToggle();
    $(this).toggleClass('active');
  });


  // Nivo Lightbox for Bookalokal page under Projects
  $('div.lightbox a').nivoLightbox();

});




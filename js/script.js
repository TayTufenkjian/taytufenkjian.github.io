$(document).ready(function() { 
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  //Nivo Lightbox for Bookalokal page under Projects
  $('div.lightbox a').nivoLightbox();
  
  // $(function(){
  //   var processPitch = function(form) {  
  //   var firstNoun = form.firstNoun.value;
  //   var secondNoun = form.secondNoun.value;
  //   var adjective = form.adjective.value;
  //   var thirdNoun = form.thirdNoun.value;
  //   var verb = form.verb.value;
  //   alert("I'm a " + firstNoun + " looking for " + secondNoun + " at a " + adjective + " company where I can use my skills in " + thirdNoun + " to " + verb + ".");
  //   }
  // });


//the madlibs code that works in script tags
  // function processPitch(form) {  
  //   var firstNoun = form.firstNoun.value;
  //   var secondNoun = form.secondNoun.value;
  //   var adjective = form.adjective.value;
  //   var thirdNoun = form.thirdNoun.value;
  //   var verb = form.verb.value;
  //   alert("I'm a " + firstNoun + " looking for " + secondNoun + " at a " + adjective + " company where I can use my skills in " + thirdNoun + " to " + verb + ".");
  // }


//accordion menu for Thoughts page
  $(".menu").accordion({collapsible: true, active: false, heightStyle: "content"});   


});




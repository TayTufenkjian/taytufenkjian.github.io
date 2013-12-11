$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(1000);
  
  // Form for Pitch Madlib 
  var pitchForm ='<form><p>Enter a noun. (You know, a person, place, or thing.) <br> <input type="text" id="firstNoun" name="firstNoun"/></p><p>Enter another noun.<br><input type="text" id="secondNoun" name="secondNoun"/></p> <p>Wonderful.  How about an adjective?<br><input type="text" id="adjective" name="adjective"/></p><p>Time for one more noun.<br><input type="text" id="thirdNoun" name="thirdNoun"/></p><p>Now clench it with a verb.<br><input type="text" id="verb" name="verb"/></p><input type="submit" name="submit" value="See your pitch"/></form>'

   $("#startPitch").click(function(){
    $(".content").html(pitchForm);
    });

  $("form").submit(function(e){
  e.preventDefault();  
  var firstNoun = ("#firstNoun").val();
  var secondNoun= ("#secondNoun").val();
  var adjective = ("#adjective").val();
  var thirdNoun = ("#thirdNoun").val();
  var verb = ("#verb").val();

  alert("oh hai!");
    });
  
  // Personal Pitch Madlib
  // I'm a (firstNoun) looking for (secondNoun) at a (adjective) company 
  // where I can use my skills in (thirdNoun) to (verb).

  //Nivo Slider for Projects page
  $(window).load(function() {
      $("#slider").nivoSlider();
    });

  });



  

//accordion menu for Thoughts page
  $(".menu").accordion({collapsible: true, active: false, heightStyle: "content"});   







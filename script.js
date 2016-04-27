$(document).ready(function(){


  $('.bannerDetails').hide();

  setTimeout(function(){
  	$('.bannerDetails').show()
  }, 550)

  $('.bxslider').bxSlider();

  // Scroll to div
  $('a[href^="#"]').on('click', function(event) {

     var target = $( $(this).attr('href') );
     console.log($(this));
     //remove active class
     $("li.active").removeClass("active");
     $(this).addClass("active");
     if( target.length ) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: target.offset().top
         }, 1000);
     }

  });

});
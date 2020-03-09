$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          $('.blackbody').css({"transition":"0.5s"});
          if($(this).scrollTop() > 100) { 
              $('.blackbody').addClass('bgwhite');
              $('.blackbody').removeClass('bg-black');

              $('.acolor').addClass('text-dark');
              $('.acolor').removeClass('text-light');

              
              
          } else {
              $('.blackbody').addClass('bg-black')
              $('.blackbody').removeClass('bgwhite');

              $('.acolor').addClass('text-light');
              $('.acolor').removeClass('text-dark');

              
          }
        });
});
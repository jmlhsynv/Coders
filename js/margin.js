  $(document).ready(function() {
        $(window).scroll(function() {
          if($(this).scrollTop() > 200) { 
 
              $('.vebmenu').addClass('m-top');
          } else {
              $('.vebmenu').removeClass('m-top');
          }
        });
});



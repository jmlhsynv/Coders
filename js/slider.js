$(document).ready(function(){
   $('.customer-logos').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     arrows: false,
     dots: true,
     
       pauseOnHover: false,
       responsive: [{
       breakpoint: 768,
       settings: {
         slidesToShow: 1
       }
     }, {
       breakpoint: 520,
       settings: {
         slidesToShow: 1
       }
     }]
   });
 });

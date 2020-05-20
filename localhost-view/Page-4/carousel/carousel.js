jQuery.noConflict()(function ($) { 
    $(document).ready(function() { 
        $('.slider-area').slick({
            centerMode: true,
            centerMode: true,
            centerPadding: '20%',
            initialSlide: 1,
            infinite:false,
            arrows: true,
            prevArrow: '.arrowprev',
            nextArrow: '.arrownext',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  // arrows: true,
                  // centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  // arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1,
                  initialSlide: 1
                }
              }
              
                
              
            ]
        });
    });
});

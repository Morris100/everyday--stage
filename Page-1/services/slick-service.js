console.log("Test");
jQuery.noConflict()(function ($) { 

$('.slider-area').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    // draggable: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
 
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow :2,
                    infinite: true
                }
            },
        ]
})

});
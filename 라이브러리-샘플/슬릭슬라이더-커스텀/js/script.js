$(document).ready(function(){
    
    $('.slider__custom').slick({
        dots: true,
        // infinite: true,
        // speed: 300,
        // autoplay: true,
        // autoplaySpeed: 3000,
        centerMode: true,
        // centerPadding: '20px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    
});
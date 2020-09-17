$(function () {
    'use strict'; // Start of use strict
    //hide preloader after loaded
    jQuery('#preloader').delay(500).fadeOut(500);
    // Fixed Navigation js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#navbar').addClass('header-scrolled');
        } else {
            $('#navbar').removeClass('header-scrolled');
        }
    });

    // testimonials Slider
    $(".owl-testimonials-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
     //mobile navbar click
     var w = $(window).width();
     if(w <= 769){
     $(".navbar-mobile .nav-item").on('click', function(){
         $(".navbar-toggler").trigger('click');
     });
     }
     //
});
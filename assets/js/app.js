/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';
const $ = require('jquery');
const slick = require('slick-carousel');

$(document).ready(function() {

    // BURGER MENU

    $('.hamburger').on('click', function() {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.menu-list').removeClass('open')
        } else {
            $(this).addClass('is-active');
            $('.menu-list').addClass('open')
        }
    })

    // SLIDER SECTION
    let slider = $(".projects-slider");
    let scrollCount = null;
    let scroll= null;

    slider
        .slick({
            infinite: true,
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    centerMode: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    centerMode: false,
                    slidesToShow: 1
                  }
                }
            ]
        });

    slider.on('wheel', (function(e) {
        e.preventDefault();

        clearTimeout(scroll);
        scroll = setTimeout(function(){scrollCount=0;}, 50);
        if(scrollCount) return 0;
        scrollCount=1;

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

    // ON SCROLL ANIMATION PAGE CURSUS

    if ($('.cursus').is(':visible')) {
        animate($('#1'))
        let pos2 = $("#2")
        let pos3 = $("#3")
        let pos4 = $("#4")

        var windowHeight = $(window).height();

        $(window).scroll(function(){
            var viewBottom = $(this).scrollTop() + windowHeight;
            if (viewBottom >= (pos2.offset().top + 50)) {
                animate($('#2'))
            }

            if (viewBottom >= (pos3.offset().top + 50)) {
                animate($('#3'))
            }

            if (viewBottom >= (pos4.offset().top + 50)) {
                animate($('#4'))
            }
        });

        function animate(element) {
            element.find('.image-animation').each(function() {
                $(this).addClass('show')
            })
            element.find('.text-animation').each(function() {
                $(this).addClass('show')
            })
        }
    }
});


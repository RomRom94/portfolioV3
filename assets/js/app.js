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

    // SLIDER SECTION
    let slider = $(".projects-slider");
    let scrollCount = null;
    let scroll= null;
    let paging = $('.pagination');

    slider
        .slick({
            infinite: true,
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1
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

    // EXPERIENCE TO HIDE SECTION

    $('.experience h4').each(function() {
        let blockToHide = $(this).next('.to-hide');
        let arrow = $(this).find('.arrow');
        $(this).on('click', function() {
            if (blockToHide.hasClass('hide')) {
                arrow.addClass('open');
                blockToHide.slideDown( 1000, function() {
                    blockToHide.removeClass('hide');
                });
            } else {
                arrow.removeClass('open');
                blockToHide.slideUp( 1000, function() {
                    blockToHide.addClass('hide');
                });
            }
        })
    })

    // ON SCROLL ANIMATION PAGE CURSUS

    if ($('.cursus')) {
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


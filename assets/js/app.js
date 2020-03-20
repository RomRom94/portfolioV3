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
    var slider = $(".projects-slider");
    var scrollCount = null;
    var scroll= null;

    slider
        .slick({
            dots: true
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
});


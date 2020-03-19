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
    $('.projects-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        cssEase: 'linear'
    });
});


/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // toggle header search
    $('.button--search').click(function() {
        $(this).toggleClass('is-active');
        $('.menu-open').slideUp('fast');
        $(".search-open").slideToggle();
        $('.button--menu').removeClass('is-active');
    });
    // toggle header search
    $('.button--menu').click(function() {
        $(this).toggleClass('is-active');
        $('.search-open').slideUp('fast');
        $(".menu-open").slideToggle();
        $('.button--search').removeClass('is-active');
    });
    // index slider
    $('.zone--highlight .slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        touchEnabled: 0,
        auto: 1,
        pause: '5000'
    });
    // author slider
    $('.zone--special .author_slider').bxSlider({
        nextText: '',
        prevText: '',
        // adaptiveHeight: 1,
        touchEnabled: 0,
        auto: 1,
        pagerSelector: ".slider_pager",
        pause: '6000'
    });
});
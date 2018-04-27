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
    // go top 
    $(".sprite-gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });
    // toggle floating social
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(".article__summary").offset().top) {
            $('.social-floating').show();
        } else {
            $('.social-floating').hide();
        }
    });
});
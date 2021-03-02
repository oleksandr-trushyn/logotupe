$(function () {
    $('.slider_inner, .news_slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
    });

    $('select').styler();

    // $('.news_slider-inner').slick({
    //     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    //     prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    //     infinite: false,
    // });

});
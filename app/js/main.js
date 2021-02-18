$(function () {
    $(".container-before-after").twentytwenty({
        no_overlay: true,
    });

    $(".work__slider").slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        draggable: true,
        fade: true,
        focusOnSelect: true,
        swipe: false,
    });
});

$(function () {
    $(".wrapper-tabs .tab").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".wrapper-tabs").find(".tab-item").removeClass("active-tab").hide();
        $(".wrapper-tabs .tabs").find(".tab").removeClass("active");
        $(this).addClass("active");
        $("#" + id)
            .addClass("active-tab")
            .fadeIn();
        return false;
    });

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

    const btn = document.querySelector(".burger__menu-wrapper");
    const menu = document.querySelector(".menu");

    const oppenMenu = () => {
        menu.classList.toggle("active");
    };

    btn.addEventListener("click", oppenMenu);
});

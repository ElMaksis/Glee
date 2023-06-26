$(function () {
    $('.filter-price__input').ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $(".filter-price__from").text("$" + data.from);
            $(".filter-price__to").text("$" + data.to);
        },
        onChange: function (data) {
            $(".filter-price__from").text("$" + data.from);
            $(".filter-price__to").text("$" + data.to);
        }
    });

    $('.slider__inner').slick({
        dots: true,
        arrows: false,
    });
});
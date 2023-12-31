$(function () {
    $('.ratio').rateYo({
        starWidth: "18px",
        normalFill: "#d6d6d6",
        retedFill: "#ffcc00",
        spacing: "12px"
    });

    $('.ratio--small-star').rateYo({
        starWidth: "12px",
        normalFill: "#d6d6d6",
        retedFill: "#ffcc00",
        spacing: "7px"
    });

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

    $('.product-one__column').slick({
        asNavFor: '.product-one__big-picture',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        arrows: false
    });

    $('.product-one__big-picture').slick({
        asNavFor: '.product-one__column',
        draggable: false,
        arrows: false
    });

    $('.related__box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.product-one__quantity').styler();

    $('.product-one__tab-item').on('click', function (e) {
        e.preventDefault();
        $('.product-one__tab-item').removeClass('product-one__tab-item--active');
        $(this).addClass('product-one__tab-item--active');

        $('.product-one__content-item').removeClass('product-one__content-item--active');
        $($(this).attr('href')).addClass('product-one__content-item--active');
    });

    $('.user-nav__menu-btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
        $('.user-nav').toggleClass('user-nav--active');
    });

    $('.blog-one__btn').on('click', function () {
        $('.blog__aside').toggleClass('blog__aside--active');
        $('.filter').toggleClass('filter--active');
    });

});
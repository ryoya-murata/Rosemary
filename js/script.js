var mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    speed:1500,
    clickable: true,
    autoplay: {
        delay: 4000,
        // disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints:{
        600:{
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        1025:{
            slidesPerView: 5.5,
            // slidesPerGroup: 2,
            spaceBetween: 16,
        }
    }
});

$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

})

$(function () {

    $('.hamberger__line-wrapper').on('click', function () {

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.hamberger-menu, #js-menu-bg').removeClass('open');

        } else {
            $(this).addClass('open');
            $('.hamberger-menu, #js-menu-bg').addClass('open');

        }

    });

});

$('#hamberger a[href]').on('click', function (event) {
    $('.hamberger__line-wrapper').trigger('click');
});


$('#js-menu-bg').on('click', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.hamberger-menu, .hamberger__line-wrapper').removeClass('open');
    }
});

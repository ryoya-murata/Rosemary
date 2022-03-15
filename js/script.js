const theWrapper = document.getElementById('swiper-wrapper');
var mySwiper = new Swiper('.swiper', {
    allowTouchMove: false,
    slidesPerView: 2,
    initialSlide: 0,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    speed: 3000,
    clickable: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function(){
          theWrapper.style.transitionTimingFunction = 'linear';
        }
      },
    breakpoints: {
        600: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        1025: {
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
            $('.hamberger-menu, .hamberger__contents, #body').removeClass('open');

        } else {
            $(this).addClass('open');
            $('.hamberger-menu, .hamberger__contents, #body').addClass('open');

        }

    });

});

$('#hamberger a[href]').on('click', function (event) {
    $('.hamberger__line-wrapper').trigger('click');
});


$(function () {
    $(window).scroll(function () {
        $(".fade-block").each(function () {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeihgt = $(window).height();
            if (scroll > blockPosition - windowHeihgt + 200) {
                $(this).addClass("active");
            }
        });
    });
});

window.onload = function () {
    setTimeout(function () {
        $(".fv__contents-wrapper").addClass("active");
    }, 1000)
}

var mySwiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    initialSlide: 0,
    spaceBetween: 16,
    centeredSlides : false,
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
        510:{
            slidesPerView: 2,
            centeredSlides: true,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        768:{
            slidesPerView: 5.5,
            // slidesPerGroup: 2,
            spaceBetween: 16,
            centeredSlides: true,
        }
    }
});

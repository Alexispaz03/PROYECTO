$(document).ready(function(){
    var mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1500, // Cambiar cada 2 segundos
            disableOnInteraction: false,
        },
    });
});

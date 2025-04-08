// ! Slide 1 for Landing Section image
var swiper = new Swiper(".swiper_1", {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullests: true,
    },
});


// ! Slider 2 for Products that have discount
var swiper = new Swiper(".slide_product", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev" 
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
    });


// var swiper = new Swiper(".slide_product1", {
//     slidesPerView: 5,
//     spaceBetween: 20,
//     navigation: {
//         nextEl:".swiper-button-next",
//         prevEl:".swiper-button-prev" 
//     },
//     autoplay: {
//         delay: 2500,
//     },
//     loop: true,
//     });

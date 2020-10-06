$('.catalog-slider.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    stagePadding: -10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2,
            stagePadding: -10
        },
        1365:{
            items:3
        }
    }
});

$('.next').click(function () {
    $('.catalog-slider.owl-carousel').trigger('next.owl.carousel');
});
$('.prev').click(function () {
    $('.catalog-slider.owl-carousel').trigger('prev.owl.carousel');
});
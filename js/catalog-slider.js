$('.catalog-slider.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    mouseDrag: false,
    stagePadding: -20,
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

$('.prev').click(function () {
    $('.catalog-slider.owl-carousel').trigger('next.owl.carousel');
});
$('.next').click(function () {
    $('.catalog-slider.owl-carousel').trigger('prev.owl.carousel');
});
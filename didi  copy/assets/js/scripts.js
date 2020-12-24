$(document).ready(function() {



$('.header__burger').click(function(event) {
    $('.header__burger, .header__menu, .header__body').toggleClass('active');
    $('body').toggleClass('lock');
});


    $('.header__list li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });

   $('.services__ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });



/* Slider */
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});















});

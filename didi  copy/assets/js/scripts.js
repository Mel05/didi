$(document).ready(function() {








$('.header__burger').click(function(event) {
    $('.header__burger, .header__menu, .header__menu__black, .header__body, .header__body__black').toggleClass('active');
    $('body').toggleClass('lock');
});

    $('.header__list li a, .header__suplist li a').each(function () {
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
$('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true, //адаптпция по высоте
    slidesToShow:1,
    slidesToScroll:1,
    speed:250, //скорость прокрутки
    adaptiveWeist:true
});

$('.slider__contacts').slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true, //адаптпция по высоте
    slidesToShow:1,
    slidesToScroll:1,
    speed:250, //скорость прокрутки
    adaptiveWeist:true
});

$('.slider__gallery').slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true, //адаптпция по высоте
    slidesToShow:1,
    slidesToScroll:1,
    speed:250, //скорость прокрутки
    adaptiveWeist:true,
    variableWidth:false,
    vertical: true,
    verticalSwiping: true
});


/* Header fixed */
const navOffset = $("#header").offset().top;

    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();

        if (scrolled > navOffset) {
            $("#header").addClass("fixed");
        } else if (scrolled <= navOffset) {

            $("#header").removeClass("fixed");
        }
    });



});
















